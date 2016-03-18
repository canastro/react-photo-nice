import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addFilter } from '../../actions/filters';
import FilterControl from '../../components/filters/control';

export default class FilterControlContainer extends Component {

    render () {
        return (
            <FilterControl
                filterKey={this.props.filterKey}
                onAddfilter={this.props.addFilter}/>
        );
    }
}

FilterControlContainer.propTypes = {
    filterKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        filters: state.filters.list
    };
}

export default connect(mapStateToProps, {
    addFilter
})(FilterControlContainer);
