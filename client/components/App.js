import React, { Component } from "react";

import SearchBar from './Search Bar/SearchBar'

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state.
    this.state = {};
  }

  componentDidMount() {
    fetch("/api/tweets")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <SearchBar />      { /*  Chris */}
        <ImageDisplay />    { /*  Cristian */}
        <ProduictInfo />    { /*  Jose  */}
        <AddToCart />     { /*  Charles  */}
      </div>
    )
  }
}
