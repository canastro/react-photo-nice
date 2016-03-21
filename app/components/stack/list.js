import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import StackItemContainer from '../../containers/stack/item';
import '!style!css!sass!./list.scss';

@DragDropContext(HTML5Backend)
export default class StackList extends Component {

    render () {

        if (!this.props.isVisible) {
            return <div className="stack-container stack-container-closed"></div>;
        }

        const filtersElements = this.props.filters.map((item, index) => {
            return (
                <StackItemContainer
                    key={item.key}
                    id={item.key}
                    index={index}
                    isActive={item.isActive}
                    modifiers={item.modifiers}
                    sortFilter={this.props.sortFilter}/>
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
    isVisible: PropTypes.bool.isRequired,

    sortFilter: PropTypes.func.isRequired
};
