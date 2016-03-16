import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./effect.scss';

export default class Effect extends Component {

    constructor (props) {
        super(props);
        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect (event) {
        event.preventDefault();
        this.props.onSelect(this.props.id);
    }

    render () {
        const {
            description,
            isSelected
        } = this.props;

        const classNames = ['pn-effect-figure'];

        if (isSelected) {
            classNames.push('pn-effect-figure-selected');
        }

        return (
            <figure className={classNames.join(' ')} onClick={this._onSelect}>
                <img src="http://lorempixel.com/50/50/" />
                <figcaption>
                    <h4>{description}</h4>
                </figcaption>
            </figure>
        );
    }
}

Effect.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
};
