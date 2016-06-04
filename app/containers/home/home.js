import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addFile } from '../../actions/filters';

import Home from '../../components/home/home';

export default class HomeContainer extends Component {
    render () {
        return (
            <Home
                addFile={this.props.addFile}
                filters={this.props.filters}
                image={this.props.image}/>
        );
    }
}

HomeContainer.propTypes = {
    addFile: PropTypes.func.isRequired,
    filters: PropTypes.array,
    image: PropTypes.object
};

function mapStateToProps(state) {
    return {
        filters: state.filters.selectedList,
        image: state.filters.image
    };
}

export default connect(mapStateToProps, {
    addFile
})(HomeContainer);
