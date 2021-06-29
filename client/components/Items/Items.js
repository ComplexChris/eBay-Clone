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
                    <div>
                        <div className={'itemDivPadding'} style={{backgroundColor: 'lightBlue'}}>
                            Condition: {this.state.item.description}
                        </div>
                        <div className={'itemDivPadding'} style={{backgroundColor: 'lightGreen'}}>
                            Model: {this.state.item.model}
                        </div>
                        <div className={'itemDivPadding'} style={{backgroundColor: 'lightYellow'}}>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type='text' defaultValue='1' size='4'/>
                        </div>
                        <div className={'itemDivPadding'} style={{backgroundColor: 'lightBlue'}}>
                            Price: <span className={'itemPrice'}>{'US  ' + this.state.item.price}</span>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Items;
