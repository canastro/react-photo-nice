import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./item.scss';

export default class StackItem extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isMinimize: true
        };

        this._onToggleFilter = this._onToggleFilter.bind(this);
        this._onRemoveFilter = this._onRemoveFilter.bind(this);
        this._onMinimize = this._onMinimize.bind(this);
    }

    _onMinimize (e) {
        e.preventDefault();

        this.setState({
            isMinimize: !this.state.isMinimize
        });
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
        const itemClass = ['stack-list-item'];

        if (this.state.isMinimize) {
            itemClass.push('stack-item-minimize');
        }

        const checkboxClass = ['fa stack-item-checkbox'];
        if (this.props.isActive) {
            checkboxClass.push('fa-check-square-o');
        } else {
            checkboxClass.push('fa-square-o');
        }

        return (
            <article className={itemClass.join(' ')}>
                <header className="stack-item-header">
                    <i className={checkboxClass.join(' ')} onClick={this._onToggleFilter}></i>
                    <h5>{this.props.id}</h5>
                    <i className="fa fa-minus stack-item-expander" onClick={this._onMinimize}></i>
                </header>

                <div className="stack-item-content">
                    <div className="stack-item-modifiers">
                        { this._getModifiers() }
                    </div>
                    <i className="fa fa-trash stack-item-trash" onClick={this._onRemoveFilter}></i>
                </div>
            </article>
        );
    }
}

StackItem.propTypes = {
    id: PropTypes.string.isRequired,
    modifiers: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,

    onToggleFilter: PropTypes.func.isRequired,
    onRemoveFilter: PropTypes.func.isRequired
};
