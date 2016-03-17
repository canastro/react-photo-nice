import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageFilter from 'image-filters';

import EffectsList from './effects/effects-list';
import EffectsContainer from './effects/effects-container';

import '!style!css!sass!./photo-nice.scss';

export default class PhotoNice extends Component {

    constructor (props) {
        super(props);

        this.state = {
            file: null,
            effects: {}
        };

        this._onDrop = this._onDrop.bind(this);
        this._getContent = this._getContent.bind(this);
        this._addEffect = this._addEffect.bind(this);
    }

    _onDrop (files) {
        this.setState({
            file: files[0]
        });
    }

    _getContent () {
        if (!this.state.file) {
            return (
                <Dropzone onDrop={this._onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            );
        }

        return (
            <div className="pn-images-container">
                <img id="pn-original" src={this.state.file.preview}/>
                <img id="pn-image" src={this.state.file.preview}/>
            </div>
        );
    }

    _addEffect (key, modifiers) {

        const effects = {
            ...this.state.effects,
            [key]: modifiers
        };

        let imageFilter = new ImageFilter({
            from: '#pn-original'
        });

        Object.keys(effects).forEach((effectKey) => {
            imageFilter = imageFilter[effectKey](effects[effectKey]);
        });

        imageFilter.update('#pn-image');

        this.setState({
            effects
        });
    }

    render () {

        let effectContainer;
        let effectsList;

        if (this.state.file) {
            effectContainer = <EffectsContainer onAddEffect={this._addEffect}/>;
            effectsList = <EffectsList effects={this.state.effects} />;
        }

        return (
            <div className="pn-editor-container">
                <div className="pn-editor-main-container">
                    { this._getContent() }
                    { effectContainer }
                </div>
                { effectsList }
            </div>
        );
    }
}
