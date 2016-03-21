import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./index.scss';

export default class Tools extends Component {

    render () {
        return (
            <ul className="tools-container">
                <li className="tool-item" onClick={this.props.onToggleFilters}>
                    <i className="fa fa-star-o"></i>
                </li>
                <li className="tool-item" onClick={this.props.onToggleStack}>
                    <i className="fa fa-bars"></i>
                </li>
                <li className="tool-item">
                    <i className="fa fa-eyedropper"></i>
                </li>
                <li className="tool-item">
                    <i className="fa fa-search-plus"></i>
                </li>
                <li className="tool-item">
                    <i className="fa fa-search-minus"></i>
                </li>
            </ul>
        );
    }
}

Tools.propTypes = {
    onToggleFilters: PropTypes.func.isRequired,
    onToggleStack: PropTypes.func.isRequired
};
