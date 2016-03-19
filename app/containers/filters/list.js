import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import FiltersList from '../../components/filters/list';

export default class FiltersListContainer extends Component {

    render () {
        return (
            <FiltersList isVisible={this.props.areFiltersVisible}/>
        );
    }
}

FiltersListContainer.propTypes = {
    areFiltersVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        areFiltersVisible: state.filters.areFiltersVisible
    };
}

export default connect(mapStateToProps, {})(FiltersListContainer);
