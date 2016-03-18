import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render () {
        return (

            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {})(App);
