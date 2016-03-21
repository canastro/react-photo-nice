import React, { Component, PropTypes } from 'react';

import { FILTERS } from '../../constants/filters';
import '!style!css!sass!./control.scss';

export default class FilterControl extends Component {

    constructor (props) {
        super(props);

        this.state = {
            config: FILTERS[this.props.filterKey],
            modifiers: {}
        };

        this._onSubmit = this._onSubmit.bind(this);
        this._onModifierChanged = this._onModifierChanged.bind(this);
        this._buildFormItem = this._buildFormItem.bind(this);
        this._buildFormContainer = this._buildFormContainer.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            config: FILTERS[nextProps.filterKey],
            modifiers: {}
        });
    }

    _onSubmit (event) {
        event.preventDefault();

        this.state.modifiers.isActive = true;
        this.props.onAddfilter(this.props.filterKey, this.state.modifiers);
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
                key={'filter-control-form-item-' + index}
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
            <article className="filter-control-container">
                <header className="filter-control-header">
                    <h1>{this.state.config.description}</h1>
                </header>

                <div className="filter-control-content">
                    {this._buildFormContainer(this.state.config.modifiers)}
                </div>
            </article>
        );
    }
}

FilterControl.propTypes = {
    filterKey: PropTypes.string.isRequired,
    onAddfilter: PropTypes.func.isRequired
};
