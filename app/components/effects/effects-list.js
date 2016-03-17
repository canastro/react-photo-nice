import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./effects-list.scss';

export default class EffectsList extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const effectsElements = Object.keys(this.props.effects).map((key, index) => {

            const modifiers = [];

            Object.keys(this.props.effects[key]).forEach((modifierKey, modifierIndex) => {
                if (modifierKey === 'data') {
                    return;
                }

                modifiers.push(
                    <div key={`effects-element-${index}-modifier-${modifierIndex}`}>
                        <strong>{modifierKey}</strong>
                        <label>{this.props.effects[key][modifierKey]}</label>
                    </div>
                );
            });

            return (
                <div key={`effets-element-${index}`} className="effect-list-item">
                    <h3>{key}</h3>
                    { modifiers }
                </div>
            );
        });

        return (
            <div className="effects-list-container">
                <div className="effects-list">
                    {effectsElements}
                </div>
            </div>
        );
    }
}

EffectsList.propTypes = {
    effects: PropTypes.object.isRequired
};
