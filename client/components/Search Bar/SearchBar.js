import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {...props, scores:[]}
    }

    getData(){
        fetch( '/api/history' )
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA: ", data)
                this.setState({history:data})
            } );
    }

    componentDidMount(){
        this.getData();
    }

    render(){
    //console.log("Categories.js PROPS: ", props)
        return (
            <div className={'search_container'} >
                <label htmlFor="user_name" className={"input_fields"}>
                    Search for anything <input className='input_box' type="text" id="user_name" name="user_name" placeholder="Bob Saget, I hope?"  onChange={ change } required/>  <br/>
                </label><br/ >
            </div>
        )
    }
}


// export default LeaderBoard;
