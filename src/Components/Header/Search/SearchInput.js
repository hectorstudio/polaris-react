import React, { Component } from 'react'
import faSpinner from '@fortawesome/fontawesome-pro-regular/faSpinner'
import faSearch from '@fortawesome/fontawesome-pro-regular/faSearch'

import { 
    InputWrap, 
    LoadingIcon, 
    SearchIcon,
    ErrorAlert
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
        let searchColor = (this.state.hasFocus ? '#120E18' : 'rgba(255,255,255, .1)');
        let checkResults = (this.props.hasResults && !this.props.loading && this.state.hasFocus);
        
        return ( 
            <InputWrap hasFocus={this.state.hasFocus}>
                { this.props.loading && <LoadingIcon icon={faSpinner} spin /> }
                { checkResults && <ErrorAlert>No Results Found</ErrorAlert> }
                <SearchIcon icon={faSearch} color={searchColor}/>
                <input 
                    {...this.props.inputProps}
                    onFocus={(e) => this.setFocus(e, true)} 
                    onBlur={(e) => this.setFocus(e, false)}
                />
            </InputWrap>
        );
    }
}