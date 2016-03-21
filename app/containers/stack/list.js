import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sortFilter } from '../../actions/filters';
import StackList from '../../components/stack/list';

export default class StackListContainer extends Component {

    render () {
        return (
            <StackList
                filters={this.props.filters}
                isVisible={this.props.isStackVisible}
                sortFilter={this.props.sortFilter}/>
        );
    }
}

StackListContainer.propTypes = {
    filters: PropTypes.array
};

function mapStateToProps(state) {
    return {
        filters: state.filters.selectedList,
        isStackVisible: state.filters.isStackVisible
    };
}

export default connect(mapStateToProps, {
    sortFilter
})(StackListContainer);
