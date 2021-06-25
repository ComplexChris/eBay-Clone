import React, { Component } from "react";
import Items from "./Items/Items"

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state.
    this.state = {};
  }

  // componentDidMount() {
  //   fetch("/api/items")
  //     .then((response) => response.json())
  //     .then((data) => {(data)});
  // }

  render() {
    return  (<div>
              My React MVP
                <Items/>
            </div>
            )
  }
}
