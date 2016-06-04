import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';

import StackListContainer from '../../containers/stack/list';
import ToolsContainer from '../../containers/tools';
import FiltersListContainer from '../../containers/filters/list';

import '!style!css!sass!./home.scss';

export default class Home extends Component {

    constructor (props) {
        super(props);

        this._onDrop = this._onDrop.bind(this);
        this._getContent = this._getContent.bind(this);
    }

    componentDidUpdate () {
        const canvas = this.refs.canvas;

        if (!canvas) {
            return;
        }

        const context = this.refs.canvas.getContext('2d');
        context.putImageData(this.props.image, 0, 0);
    }

    _onDrop (files) {
        this.props.addFile(files[0]);
    }

    _getContent () {
        if (!this.props.image) {
            return (
                <Dropzone onDrop={this._onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            );
        }

        return (
            <div className="pn-images-container">
                <canvas ref="canvas"/>
            </div>
        );
    }

    render () {
        let filterContainer;
        let stackListContainer;
        let toolsContainer;

        if (this.props.image) {
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
    addFile: PropTypes.func.isRequired,
    filters: PropTypes.array,
    image: PropTypes.object
};
