import React, { Component } from "react";
import Images from "./Images/Images";
import AddToCart from "./Charles/AddToCart";
import Items from "./Items/Items";
import SearchBar from "./Search Bar/SearchBar";

class App extends Component {
  componentDidMount() {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Items />
        <Images images={this.props.images} />
      </div>
    );
  }
}

export default App;
