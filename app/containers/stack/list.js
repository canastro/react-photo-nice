import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import StackList from '../../components/stack/list';

export default class StackListContainer extends Component {

    render () {
        return (
            <StackList
                filters={this.props.filters}
                isVisible={this.props.isStackVisible}/>
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

export default connect(mapStateToProps, {})(StackListContainer);
