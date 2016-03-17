import React, { Component, PropTypes } from 'react';

import { EFFECTS } from '../../constants/effects';
import '!style!css!sass!./effect-control.scss';

export default class EffectControl extends Component {

    constructor (props) {
        super(props);

        this.state = {
            config: EFFECTS[this.props.effectKey],
            modifiers: {}
        };

        this._onSubmit = this._onSubmit.bind(this);
        this._onModifierChanged = this._onModifierChanged.bind(this);
        this._buildFormItem = this._buildFormItem.bind(this);
        this._buildFormContainer = this._buildFormContainer.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            config: EFFECTS[nextProps.effectKey],
            modifiers: {}
        });
    }

    _onSubmit (event) {
        event.preventDefault();

        this.props.onAddEffect(this.props.effectKey, this.state.modifiers);
    }

    _onModifierChanged (key, event) {
        event.preventDefault();

        this.setState({
            modifiers: {
                ...this.state.modifiers,
                [key]: parseInt(event.target.value, 10)
            }
        });
    }

    _buildFormItem (item, index) {
        return (
            <input
                type="text"
                key={'effect-control-form-item-' + index}
                value={this.state.modifiers[item.key]}
                onChange={this._onModifierChanged.bind(this, item.key)}/>
        );
    }

    _buildFormContainer (modifiers) {
        return (
            <form onSubmit={this._onSubmit}>
                { modifiers.map(this._buildFormItem) }
                <button type="submit">Apply</button>
            </form>
        );
    }

    render () {
        return (
            <div className="effect-control-container">
                <h1>{this.state.config.description}</h1>
                {this._buildFormContainer(this.state.config.modifiers)}
            </div>
        );
    }
}

EffectControl.propTypes = {
    effectKey: PropTypes.string.isRequired,
    onAddEffect: PropTypes.func.isRequired
};
