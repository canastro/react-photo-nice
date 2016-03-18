import React, { Component } from 'react';
import '!style!css!sass!./list.scss';

import { FILTERS } from '../../constants/filters';

import FilterCard from './card';
import FilterControlContainer from '../../containers/filters/control';

export default class FiltersList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedfilterKey: null
        };

        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect (key) {
        this.setState({
            selectedfilterKey: this.state.selectedfilterKey === key ? null : key
        });
    }

    _getfiltersThumbnails () {
        return Object.keys(FILTERS).map((key) => {
            return (
                <FilterCard
                    key={key}
                    id={key}
                    description={FILTERS[key].description}
                    isSelected={key === this.state.selectedfilterKey}
                    onSelect={this._onSelect}/>
            );
        });
    }

    _getfilterControl () {
        if (!this.state.selectedfilterKey) {
            return null;
        }

        return (
            <FilterControlContainer
                filterKey={this.state.selectedfilterKey}/>
        );
    }

    render () {
        return (
            <div className="filters-container">
                <div className="filters-thumbnails">
                    {this._getfiltersThumbnails()}
                </div>
                {this._getfilterControl()}
            </div>
        );
    }
}
