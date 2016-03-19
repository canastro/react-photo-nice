import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Home from '../../components/home/home';

export default class HomeContainer extends Component {

    render () {
        return (
            <Home filters={this.props.filters}/>
        );
    }
}

HomeContainer.propTypes = {
    filters: PropTypes.array
};

function mapStateToProps(state) {
    return {
        filters: state.filters.selectedList
    };
}

export default connect(mapStateToProps, {})(HomeContainer);
