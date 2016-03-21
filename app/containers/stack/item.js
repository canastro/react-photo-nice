import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import StackItem from '../../components/stack/item';
import { removeFilter, toggleFilter } from '../../actions/filters';

export default class StackItemContainer extends Component {

    render () {
        return (
            <StackItem
                id={this.props.id}
                index={this.props.index}
                modifiers={this.props.modifiers}
                isActive={this.props.isActive}
                sortFilter={this.props.sortFilter}
                onRemoveFilter={this.props.removeFilter}
                onToggleFilter={this.props.toggleFilter}/>
        );
    }
}

StackItemContainer.propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    modifiers: PropTypes.object,
    isActive: PropTypes.bool.isRequired,
    sortFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {
    removeFilter,
    toggleFilter
})(StackItemContainer);
