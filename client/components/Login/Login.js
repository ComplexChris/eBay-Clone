import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            isLoggedIn: (this.getUserToken()==null) ? false : true
        }
    }

    getData(){
        fetch( '/api/history' )
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA: ", data)
                this.setState({history:data})
            } );
    }

    getUserToken(variable="USER_TOKEN"){
        return window.localStorage.getItem(variable)
    }

    componentDidMount(){
        this.getData();
    }

    loginCallBack(e){
        console.log("TARGET: ", e.target)
    }
    registerCallBack(e){
        console.log("TARGET: ", e.target)
    }

    logInJSX(){
        return (
            <span>
                Hi!
                <a href="#" onClick = {this.loginCallBack.bind(this)}>&ensp; Sign In &ensp; </a>
                or
                <a href="#" onClick = {this.registerCallBack.bind(this)}>&ensp; Register &emsp; </a>
            </span>
        )
    }
    welcomeJSX(){
        return (
            <span>
                <a href="#" onClick = {this.getUserPage.bind(this)}>&ensp; Welcome back! &ensp; </a>
            </span>

        )
    }
    getElement(){
        return (
            (this.state.isLoggedIn) ?
            this.welcomeJSX() :
            this.logInJSX()
        )
    }

    render(){
    //console.log("Categories.js PROPS: ", props)
        const options = ["Electronics", "Furniture", "Whatever"]
        return( this.getElement() )
    }
}

