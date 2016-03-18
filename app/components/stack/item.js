import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./item.scss';

export default class StackItem extends Component {

    constructor (props) {
        super(props);

        this._onToggleFilter = this._onToggleFilter.bind(this);
        this._onRemoveFilter = this._onRemoveFilter.bind(this);
    }

    _onToggleFilter (e) {
        e.preventDefault();

        this.props.onToggleFilter(this.props.id);
    }

    _onRemoveFilter (e) {
        e.preventDefault();

        this.props.onRemoveFilter(this.props.id);
    }

    _getModifiers () {
        const modifiers = [];

        Object.keys(this.props.modifiers).forEach((key, index) => {
            if (key === 'data') {
                return;
            }

            modifiers.push(
                <div key={`filters-element-modifier-${index}`}>
                    <strong>{key}</strong>
                    <label>{this.props.modifiers[key]}</label>
                </div>
            );
        });

        return modifiers;
    }

    render () {
        const checkboxClass = ['fa stack-item-checkbox'];
        if (this.props.modifiers.isActive) {
            checkboxClass.push('fa-check-square-o');
        } else {
            checkboxClass.push('fa-square-o');
        }

        return (
            <div className="filter-list-item">
                <h3>{this.props.id}</h3>
                { this._getModifiers() }
                <i className="fa fa-trash stack-item-trash" onClick={this._onRemoveFilter}></i>
                <i className={checkboxClass.join(' ')} onClick={this._onToggleFilter}></i>
            </div>
        );
    }
}

StackItem.propTypes = {
    id: PropTypes.string.isRequired,
    modifiers: PropTypes.object.isRequired,

    onToggleFilter: PropTypes.func.isRequired,
    onRemoveFilter: PropTypes.func.isRequired
};
