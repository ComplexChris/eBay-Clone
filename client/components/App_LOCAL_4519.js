import React, { Component } from "react";

import SearchBar from './Search Bar/SearchBar'
import Login from './Login/Login'

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state.
    this.state = {};
  }

  componentDidMount() {
    return;
    fetch("/api/tweets")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <Login />
        <SearchBar />      { /*  Chris */}

      </div>
    )
  }
}

`
        <ImageDisplay />    { /*  Cristian */}
        <ProduictInfo />    { /*  Jose  */}
        <AddToCart />     { /*  Charles  */}
        `
