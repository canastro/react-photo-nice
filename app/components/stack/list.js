import React, { Component, PropTypes } from 'react';

import StackItemContainer from '../../containers/stack/item';
import '!style!css!sass!./list.scss';

export default class StackList extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const filtersElements = this.props.filters.map((item) => {
            return (
                <StackItemContainer
                    key={item.key}
                    id={item.key}
                    modifiers={item.modifiers}/>
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
    filters: PropTypes.array.isRequired
};
