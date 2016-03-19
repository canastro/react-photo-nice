import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
    toggleFiltersBarVisibility,
    toggleStackBarVisibility
} from '../../actions/tools';
import Tools from '../../components/tools';

export default class ToolsContainer extends Component {

    render () {
        return (
            <Tools
                onToggleFilters={this.props.toggleFiltersBarVisibility}
                onToggleStack={this.props.toggleStackBarVisibility}/>
        );
    }
}

ToolsContainer.propTypes = {
    toggleFiltersBarVisibility: PropTypes.func.isRequired,
    toggleStackBarVisibility: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {
    toggleFiltersBarVisibility,
    toggleStackBarVisibility
})(ToolsContainer);
