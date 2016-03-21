import React, { Component, PropTypes } from 'react';
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
        const thumbnails = [];

        Object.keys(FILTERS).forEach((key) => {
            thumbnails.push(
                <FilterCard
                    key={key}
                    id={key}
                    description={FILTERS[key].description}
                    isSelected={key === this.state.selectedfilterKey}
                    onSelect={this._onSelect}/>
            );

            if (key === this.state.selectedfilterKey) {
                thumbnails.push(this._getfilterControl());
            }
        });

        return thumbnails;
    }

    _getfilterControl () {
        return (
            <FilterControlContainer
                key="filter-control-container"
                filterKey={this.state.selectedfilterKey}/>
        );
    }

    render () {

        if (!this.props.isVisible) {
            return <div className="filters-container filters-container-closed"></div>;
        }

        return (
            <div className="filters-container">
                <div className="filters-thumbnails">
                    {this._getfiltersThumbnails()}
                </div>
            </div>
        );
    }
}

FiltersList.propTypes = {
    isVisible: PropTypes.bool.isRequired
};
