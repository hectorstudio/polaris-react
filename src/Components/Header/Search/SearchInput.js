import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { faSearch, faSpinner } from '@fortawesome/pro-regular-svg-icons'

import { InputWrap, LoadingIcon, SearchIcon, NoResultsError } from './Styles'

class SearchInput extends Component {
    constructor() {
        super();

        this.state = {
            hasFocus: false,
            value: ''
        }
    }

    setFocus = (e, hasFocus) => {
        this.setState({ hasFocus }, () => {
            this.props.toggleFocus(hasFocus);
            (hasFocus ? this.props.inputProps.onFocus(e) : this.props.inputProps.onBlur(e))
        });
    }

    setSearch = (e) => {
        this.setState({ value: e.target.value });
        this.props.inputProps.onChange(e) 
    }

    checkKey = (e) => {
        let location = this.props.location.pathname.split('/'),
            currentLocation = location.pop() || location.pop();

        if (e.key === 'Enter' && this.state.value.replace(/\s*$/, "") !== currentLocation.replace(/\s*$/, "")) {
            this.props.unmount();

            setTimeout(() => {
                this.props.history.push(`/search/${this.state.value}`);
            }, 500);
        }
    }

    render() { 
        const { loading, hasSuggestions, value, inputProps } = this.props;

        let searchColor = (this.state.hasFocus ? '#120E18' : 'rgba(255,255,255, .1)'),
            noResults = (!hasSuggestions && this.state.hasFocus && !loading && value.length > 2);

        return ( 
            <InputWrap hasFocus={this.state.hasFocus}>
                { loading && <LoadingIcon icon={faSpinner} spin /> }
                <SearchIcon icon={faSearch} color={searchColor}/>
                <input 
                    {...inputProps}
                    onFocus={(e) => this.setFocus(e, true)} 
                    onBlur={(e) => this.setFocus(e, false)}
                    onChange={(e) => this.setSearch(e)}
                    onKeyPress={(e) => this.checkKey(e)}
                />

                { noResults && <NoResultsError>No Results Found</NoResultsError> }
            </InputWrap>
        );
    }
}

export default withRouter(SearchInput);