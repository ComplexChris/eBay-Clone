import React, { Component } from "react";
import PropTypes from 'prop-types';

// Primary Search Bar component, developed by Chris Nguyen
const version = "1.5.5";

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            history:['Cats', 'Dogs', 'Whatever...'],
            category:"All Categories"
        }
    }

    getData(){
        return
        this.state = {...props, scores:[]}
    }

    getData(){
        fetch( '/api/search/history' )
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA: ", data)
                if(!data) this.setState({ history: data[0] })
            } );
    }

    componentDidMount(){
        this.getData();
    }

    updateCategory(e){
        console.log("Submitted: ", e.target.value)
        this.setState({category:e.target.value})
        e.preventDefault()
    }
    submitSearch(e){
        this.setState({ass:true})
        e.preventDefault()
    }

    render(){
        const options = ["All Categories", "Electronics", "Furniture", "Whatever"]
        return (
            <div className={'search_container'} >
                <form className={"search_form"} onSubmit={this.submitSearch.bind(this) }>
                    <label htmlFor="search_box" className={"input_fields"}>
                        <input  className='input_box searchBox' list="history_options" type="search" id="search_box" name="search_box" placeholder="Search for anything" autoComplete="true" size="30" minLength="1" required/>
                        <datalist id="history_options">
                            {this.state.history.map( (searched, i) => <option key={`${searched.id}${i}`}> {searched.search_query} </option> ) }
                        </datalist>
                    </label>
                    <label className={"input_fields"}>
                        <select className='input_box' name={"Category"} value={this.state.category} onChange={ this.updateCategory.bind(this) }>
                            {options.map( cat => <option  key={`Category_${cat}`}> {cat} </option> ) }
                        </select>
                    </label>

                    <input type="submit" value="Search" className="submit_action"   />
                </form>
            </div>
        )
    }
}


// export default LeaderBoard;
