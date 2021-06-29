import React from "react";
import { Component } from "react";
const version = '29June'
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      displayItem: 4,
    };
  }
  componentDidMount() {
    fetch(`/api/items/${this.state.displayItem}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({ item: data[0][0] }));
      });
  }
  render() {
    return (
      <div className={"itemComponents"}>
        <div className={"itemDescHeader"}>
          <h1>{this.state.item.name}</h1>
        </div>
        <hr />
        <div>
          <div>
            Condition: {this.state.item.description}
            <br />
          </div>
          <div>
            Model: awesome
            <br />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" value="1" size="4" />
            <br />
          </div>
          <hr />
          <div>
            Price:{" "}
            <span className={"itemPrice"}>
              {"US  " + this.state.item.price}
            </span>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Items;
