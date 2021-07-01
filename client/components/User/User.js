import React, { Component } from "react";
import PropTypes from 'prop-types';

// Primary login component, developed by Chris Nguyen
const version = "1.2.5";

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            isLoggedIn: (props.user_id == null) ? false : true
        }
    }

    loginCallBack(e){
        alert("Logging you in...")
        setTimeout( ()=>alert("Success. Welcome in!"), 2000)
    }

    registerCallBack(e){
        alert("Registering...")
        setTimeout( ()=>alert("Success. Welcome in!"), 2000)
    }
    getUserPage(){
        // Load the users profile
        alert("Sorry, I haven't had time to build your profile page. \nHow about some candy instead?")
    }

    logInJSX(){
        return (
            <span>
                Hi!
                <a href="#" onClick = {this.loginCallBack.bind(this) }>&ensp; Sign In &ensp; </a>
                or
                <a href="#" onClick = {this.registerCallBack.bind(this) }>&ensp; Register &emsp; </a>
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
        return( this.getElement() )
    }
}

