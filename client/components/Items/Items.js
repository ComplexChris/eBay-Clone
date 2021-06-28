import React from "react";
import { Component } from "react";
import "./styles/styles.css";

class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
                        item: {},
                        displayItem: 4
                    }
    }
    componentDidMount() {
        fetch(`/api/items/${this.state.displayItem}`)
          .then((response) => response.json())
          .then((data) => {this.setState(() => ({item: data[0]}))});
      }
    render() {
        console.log('state', this.state)
        return (
                <div className={'itemComponents'}>
                    <div className={'itemDescHeader'}>
                        <h1>{this.state.item.name}</h1>
                    </div>
                    <hr/>
                    <div>
                        <div style={{backgroundColor: 'lightBlue'}}>
                            Condition: {this.state.item.description}<br/>
                        </div>
                        <div style={{backgroundColor: 'lightGreen'}}>
                            Model: {this.state.item.model}<br/>
                        </div>
                        <div style={{backgroundColor: 'lightYellow'}}>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type='text' defaultValue='1' size='4'/><br/>
                        </div>
                        <hr/>
                        <div style={{backgroundColor: 'lightBlue'}}>
                            Price: <span className={'itemPrice'}>{'US  ' + this.state.item.price}</span><br/>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Items;
