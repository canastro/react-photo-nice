import React, { Component, PropTypes } from 'react';

import StackItem from './item';
import '!style!css!sass!./list.scss';

export default class StackList extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const filtersElements = Object.keys(this.props.filters).map((key, index) => {
            return (
                <StackItem
                    key={key}
                    id={key}
                    modifiers={this.props.filters[key]}
                    onToggleFilter={this.props.onToggleFilter}
                    onRemoveFilter={this.props.onRemoveFilter}/>
            );
        });

        return (
            <div className="filters-list-container">
                <div className="filters-list">
                    {filtersElements}
                </div>
            </div>
        );
    }
}

StackList.propTypes = {
    filters: PropTypes.object.isRequired,
    onToggleFilter: PropTypes.func.isRequired,
    onRemoveFilter: PropTypes.func.isRequired
};
