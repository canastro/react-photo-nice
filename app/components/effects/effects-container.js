import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./effects-container.scss';

import { EFFECTS } from '../../constants/effects';

import Effect from './effect';
import EffectControl from './effect-control';

export default class EffectsContainer extends Component {

    constructor (props) {
        super(props);

        this.state = {
            effects: EFFECTS,
            selectedEffectKey: null
        };

        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect (key) {
        this.setState({
            selectedEffectKey: this.state.selectedEffectKey === key ? null : key
        });
    }

    _getEffectsThumbnails () {
        return Object.keys(this.state.effects).map((key) => {
            return (
                <Effect
                    key={key}
                    id={key}
                    description={this.state.effects[key].description}
                    isSelected={key === this.state.selectedEffectKey}
                    onSelect={this._onSelect}/>
            );
        });
    }

    _getEffectControl () {
        if (!this.state.selectedEffectKey) {
            return null;
        }

        return (
            <EffectControl
                effectKey={this.state.selectedEffectKey}
                onAddEffect={this.props.onAddEffect}/>
        );
    }

    render () {
        return (
            <div>
                {this._getEffectControl()}
                {this._getEffectsThumbnails()}
            </div>
        );
    }
}

EffectsContainer.propTypes = {
    onAddEffect: PropTypes.func.isRequired
};
