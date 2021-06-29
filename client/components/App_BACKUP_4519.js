import React, { Component } from "react";
import AddToCart from "./Charles/AddToCart";
import Items from "./Items/Items";

import SearchBar from './Search Bar/SearchBar'
import Login from './Login/Login'

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state.
    this.state = {};
  }

  componentDidMount() {
<<<<<<< HEAD
    return;
    fetch("/api/tweets")
=======
    fetch("/api/cart")
>>>>>>> main
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Login />
        <SearchBar />      { /*  Chris */}

      </div>
    )
=======
        <AddToCart />
        <Items />
      </div>
    );
>>>>>>> main
  }
}

`
        <ImageDisplay />    { /*  Cristian */}
        <ProduictInfo />    { /*  Jose  */}
        <AddToCart />     { /*  Charles  */}
        `
