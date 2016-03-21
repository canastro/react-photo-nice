//https://github.com/gaearon/react-dnd/blob/master/examples/04%20Sortable/Cancel%20on%20Drop%20Outside/Container.js

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

import '!style!css!sass!./item.scss';

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    }
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.sortFilter(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        // monitor.getItem().index = hoverIndex;
    }
};

class StackItem extends Component {

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
        const { connectDragSource, connectDropTarget } = this.props;
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

        return connectDragSource(connectDropTarget(
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
        ));
    }
}

StackItem.propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    modifiers: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,

    onToggleFilter: PropTypes.func.isRequired,
    onRemoveFilter: PropTypes.func.isRequired,
    sortFilter: PropTypes.func.isRequired,

    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,

    isDragging: PropTypes.bool.isRequired
};

export default flow(
    DragSource('stackItem', cardSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })),
    DropTarget('stackItem', cardTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    }))
)(StackItem);
