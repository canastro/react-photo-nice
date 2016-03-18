import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageFilter from 'image-filters';

import StackList from './stack/list';
import FiltersList from './filters/list';

import '!style!css!sass!./photo-nice.scss';

export default class PhotoNice extends Component {

    constructor (props) {
        super(props);

        this.state = {
            file: null,
            filters: {}
        };

        this._onDrop = this._onDrop.bind(this);
        this._getContent = this._getContent.bind(this);
        this._addfilter = this._addfilter.bind(this);
        this._removeFilter = this._removeFilter.bind(this);
        this._onToggleFilter = this._onToggleFilter.bind(this);
    }

    _onToggleFilter (key) {
        const filters = {
            ...this.state.filters,
            [key]: {
                ...this.state.filters[key],
                isActive: !this.state.filters[key].isActive
            }
        };

        this._applyFilters(filters);

        this.setState({
            filters
        });
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

        return (
            <div className="pn-images-container">
                <img id="pn-original" src={this.state.file.preview}/>
                <img id="pn-image" src={this.state.file.preview}/>
            </div>
        );
    }

    _removeFilter (key) {
        const filters = this.state.filters;
        delete filters[key];

        this._applyFilters(filters);

        this.setState({
            filters
        });
    }

    _addfilter (key, modifiers) {
        const filters = {
            ...this.state.filters,
            [key]: modifiers
        };

        this._applyFilters(filters);

        this.setState({
            filters
        });
    }

    _applyFilters (filters) {
        let imageFilter = new ImageFilter({
            from: '#pn-original'
        });

        Object.keys(filters).forEach((filterKey) => {
            if (!filters[filterKey].isActive) {
                return;
            }

            imageFilter = imageFilter[filterKey](filters[filterKey]);
        });

        imageFilter.update('#pn-image');
    }

    render () {

        let filterContainer;
        let stackList;

        if (this.state.file) {
            filterContainer = <FiltersList onAddfilter={this._addfilter}/>;
            stackList = (
                <StackList
                    filters={this.state.filters}
                    onToggleFilter={this._onToggleFilter}
                    onRemoveFilter={this._removeFilter}/>
            );
        }

        return (
            <div className="pn-editor-container">
                <div className="pn-editor-main-container">
                    { this._getContent() }
                    { filterContainer }
                </div>
                { stackList }
            </div>
        );
    }
}
