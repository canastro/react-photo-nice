import React, { Component, PropTypes } from 'react';

import StackItemContainer from '../../containers/stack/item';
import '!style!css!sass!./list.scss';

export default class StackList extends Component {
    render () {

        if (!this.props.isVisible) {
            return <div className="stack-container stack-container-closed"></div>;
        }

        const filtersElements = this.props.filters.map((item) => {
            return (
                <StackItemContainer
                    key={item.key}
                    id={item.key}
                    isActive={item.isActive}
                    modifiers={item.modifiers}/>
            );
        });

        return (
            <div className="stack-list-container">
                <div className="stack-list">
                    {filtersElements}
                </div>
            </div>
        );
    }
}

StackList.propTypes = {
    filters: PropTypes.array.isRequired,
    isVisible: PropTypes.bool.isRequired
};
