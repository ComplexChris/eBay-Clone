import React, { Component } from "react";
import "./styles/search_style.css";
import ShowResults from "./Results"

// Primary Search Bar component, developed by Chris Nguyen
const version = "1.5.5";

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            history:['Cats', 'Dogs', 'Whatever...'],
            category:"All Categories",
            search_input : "",
            search_results: null ,   // Template/mock data
            show_results: false
        }

    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        console.log("GETTING DATA")
        fetch( '/api/search/history' )
            .then((response) => response.json())
            .then((data) => {
                if(data) this.setState({ history: data[0] })
            } );
    }

    updateCategory(e){
        this.setState({category:e.target.value})
        e.preventDefault()
    }
    updateSearch(e){
        this.state.search_input = e.target.value
        e.preventDefault()
    }
    updateItem(e){
        this.state.setCurrentItem( Number.parseInt( e.currentTarget.id) )
        this.closeModal(e, true)
        e.preventDefault()
    }
    closeModal(e, force=false){
        if(e.target===e.currentTarget | force){
            this.setState({show_results:false})
        }
        e.preventDefault()
    }

    submitSearch(e){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search_string:this.state.search_input, search_date: new Date().toUTCString() })
        }
        this.postSearch(`/api/items/search`, requestOptions, (data) => this.setState(() => ({
                search_results: data.rows,
                show_results: (data.rows.length>0) ? true : (alert("No results found."), false)
            })
            )
        )
        this.postSearch('/api/search/history', requestOptions, ()=>{} )

        e.preventDefault()
    }
    postSearch(url, requestOptions, callBack){
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => { callBack(data) });
    }

    render(){
        console.log("STATER:" , this.state )
        const options = [" All Categories", " Baby", " Games", " Computers", " Beauty", " Tools", " Electronics", " Sports", " Clothing", " Books", " Kids", " Music", " Jewelry", " Automotive", " Outdoors", " Toys", " Garden", " Industrial", " Health", " Grocery", " Movies", " Home"]

        const json_res = [{"id":1,"name":"7up Diet, 355 Ml","category":"Garden","company":"Yost-Pollich","price":"$7.50"}]
        var repeated = [].concat(... new Array(10).fill(json_res));    // For seeding/testing purposes only
        const cache = []
        return (
            <div className={'search_container'} >

                <form className={"search_form"} onSubmit={this.submitSearch.bind(this) }>
                    <div className={"ebayLogo"}>
                        <img src="ebay.png" height="47px" width="130px"></img>
                    </div>

                    <label htmlFor="search_box" className={"input_fields"}>
                        <input  className='input_box searchBox' list="history_options" type="search" id="search_box" name="search_box" placeholder="Search for anything" autoComplete="false" size="30" minLength="1"  onChange={ this.updateSearch.bind(this) } required/>
                        <datalist id="history_options">
                            {this.state.history.map( (searched, i) => <option className={"history_option"} value={searched.search_query} key={`${searched.id}${i}`}> {searched.search_query} </option> ) }
                        </datalist>
                    </label>
                    <label className={"input_fields"}>
                        <select className='input_box' name={"Category"} value={this.state.category} onChange={ this.updateCategory.bind(this) }>
                            {options.map( cat => <option  key={`Category_${cat}`}> {cat} </option> ) }
                        </select>
                    </label>

                    <input type="submit" value="Search" className="submit_action"/>
                </form>

                {this.state.show_results && <ShowResults close={this.closeModal.bind(this)} updateItem={this.updateItem.bind(this)} result_items={this.state.search_results} /> }
            </div>
        )
    }
}


// export default LeaderBoard;
// git rm --cached <file>
