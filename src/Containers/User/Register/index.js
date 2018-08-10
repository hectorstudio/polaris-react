import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { getUrlParameter } from 'Helpers'

import { RegisterWrap } from './Styles'

import RegisterForm from 'Components/User/Register'

class Register extends Component {
    state = { 
        error: false,
        username: '',
        password: '',
        inviteCode: ''
    }

    componentWillMount() {
        this.setState({
            inviteCode: getUrlParameter('inviteCode')
        });
    }

    _handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _handleRegister = () => {
        console.log(this.state)
    }
    
    render() { 
        let RegisterProps = {
            handleRegister: this._handleRegister,
            handleChange: this._handleChange,
            error: this.state.error,
            inviteCode: this.state.inviteCode
        }

        return ( 
            <RegisterWrap>
                <RegisterForm { ...RegisterProps }/>
            </RegisterWrap>
        );
    }
}
 
export default withAlert(Register)