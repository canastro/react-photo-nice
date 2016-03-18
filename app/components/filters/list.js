import React, { Component, PropTypes } from 'react';
import '!style!css!sass!./list.scss';

import { FILTERS } from '../../constants/filters';

import FilterCard from './card';
import FilterControl from './control';

export default class FiltersList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            filters: FILTERS,
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
        return Object.keys(this.state.filters).map((key) => {
            return (
                <FilterCard
                    key={key}
                    id={key}
                    description={this.state.filters[key].description}
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
            <FilterControl
                filterKey={this.state.selectedfilterKey}
                onAddfilter={this.props.onAddfilter}/>
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

FiltersList.propTypes = {
    onAddfilter: PropTypes.func.isRequired
};
