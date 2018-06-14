import React, { Component } from 'react';
import styled from 'styled-components'

import Logout from 'Pages/Auth/Logout'
import FetchMovies from 'Actions/fetchMovies'

const MoviesWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    float:left;
    width:100%;
`;

export default class Dashboard extends Component {
    render() { 
        return ( 
            <div>
                <h1>Dashboard</h1>
                <Logout />

                <MoviesWrap>
                    <FetchMovies />
                </MoviesWrap>
            </div>
         )
    }
}

