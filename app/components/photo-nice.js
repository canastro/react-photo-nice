import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageFilter from 'image-filters';

import EffectsContainer from './effects/effects-container';

import '!style!css!sass!./photo-nice.scss';

export default class PhotoNice extends Component {

    constructor (props) {
        super(props);

        this.state = {
            file: null,
            imageFilter: null,
            effects: []
        };

        this._onDrop = this._onDrop.bind(this);
        this._handleImageLoad = this._handleImageLoad.bind(this);
        this._getContent = this._getContent.bind(this);
        this._addEffect = this._addEffect.bind(this);
    }

    _onDrop (files) {
        this.setState({
            file: files[0]
        });
    }

    _handleImageLoad() {
        this.setState({
            imageFilter: new ImageFilter({
                from: '#pn-image'
            })
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
            <div>
                <img id="pn-image" src={this.state.file.preview} onLoad={this._handleImageLoad}/>
                <div id="target"/>
            </div>
        );
    }

    _addEffect (key, modifiers) {

        const effects = [...this.state.effects, {
            key,
            modifiers
        }];

        let imageFilter = new ImageFilter({
            from: '#pn-image'
        });

        effects.forEach((effect) => {
            imageFilter = imageFilter[effect.key](effect.modifiers);
        });

        imageFilter.append('#target');

        this.setState({
            effects,
            imageFilter
        });
    }

    render () {

        let effectContainer;
        if (this.state.file) {
            effectContainer = <EffectsContainer onAddEffect={this._addEffect}/>;
        }

        return (
            <div>
                { this._getContent() }
                { effectContainer }
            </div>
        );
    }
}
