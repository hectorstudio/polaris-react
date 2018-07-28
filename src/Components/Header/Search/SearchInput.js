import React, { Component } from 'react'
import faSpinner from '@fortawesome/fontawesome-pro-regular/faSpinner'
import faSearch from '@fortawesome/fontawesome-pro-regular/faSearch'

import { 
    InputWrap, 
    LoadingIcon, 
    SearchIcon,
    NoResultsError
} from './Styles'

export default class SearchInput extends Component {
    state = {
        hasFocus: false
    }

    setFocus = (e, hasFocus) => {
        this.setState({ hasFocus }, () => {
            this.props.toggleFocus(hasFocus);
            (hasFocus ? this.props.inputProps.onFocus(e) : this.props.inputProps.onBlur(e))
        });
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
                />

                { noResults && <NoResultsError>No Results Found</NoResultsError> }
            </InputWrap>
        );
    }
}