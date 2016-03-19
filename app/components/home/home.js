import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import ImageFilter from 'image-filters';

import StackListContainer from '../../containers/stack/list';
import ToolsContainer from '../../containers/tools';
import FiltersListContainer from '../../containers/filters/list';

import '!style!css!sass!./home.scss';

export default class Home extends Component {

    constructor (props) {
        super(props);

        this.state = {
            file: null
        };

        this._onDrop = this._onDrop.bind(this);
        this._getContent = this._getContent.bind(this);
    }

    _applyFilters (filters) {
        let imageFilter = new ImageFilter({
            from: '#pn-original'
        });

        filters.forEach((filter) => {
            if (!filter.isActive) {
                return;
            }

            imageFilter = imageFilter[filter.key](filter.modifiers);
        });

        return imageFilter.getDataURL();
    }

    _onDrop (files) {
        this.setState({
            file: files[0]
        });
    }

    _getContent () {
        if (!this.state.file) {
            return (
                <Dropzone onDrop={this._onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            );
        }

        let imageSource;

        if (this.props.filters.length) {
            imageSource = this._applyFilters(this.props.filters);
        }

        return (
            <div className="pn-images-container">
                <img id="pn-original" src={this.state.file.preview}/>
                <img id="pn-image" src={imageSource || this.state.file.preview}/>
            </div>
        );
    }

    render () {

        let filterContainer;
        let stackListContainer;
        let toolsContainer;

        if (this.state.file) {
            filterContainer = <FiltersListContainer />;
            stackListContainer = <StackListContainer/>;
            toolsContainer = <ToolsContainer/>;
        }

        return (
            <div className="pn-editor-container">
                <div className="pn-editor-main-container">
                    { this._getContent() }
                    { filterContainer }
                </div>
                { stackListContainer }
                { toolsContainer }
            </div>
        );
    }
}

Home.propTypes = {
    filters: PropTypes.array
};
