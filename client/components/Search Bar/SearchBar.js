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

    callBack(e){
        console.log("TARGET: ", e.target)
    }

    render(){
    //console.log("Categories.js PROPS: ", props)
        const options = ["Electronics", "Furniture", "Whatever"]
        return (
            <div className={'search_container'} >
                <label htmlFor="search_box" className={"input_fields"}>
                    <input className='input_box' type="text" id="search_box" name="search_box" placeholder="Search for anything"  onChange={ this.callBack } required/>
                </label>
                <label className={"input_fields"}>
                    <select className='input_box' name={"Category"} value={"Category"} onChange={ (e)=>callBack(e.target.name, e.target.value) }>
                        {options.map( cat => <option key={cat}> {cat} </option> ) }
                    </select>
                </label>
                <div>
                    <input type="submit" value="Search" className="submit_action"  />
                </div>
            </div>
        )
    }
}


// export default LeaderBoard;
