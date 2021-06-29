import React, { Component } from "react";
import Images from "./Cristian/Images";
import ImageCarousel from "./Cristian/ImageCarousel";
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
        <AddToCart />
        <Items />
        <Images/>
        <ImageCarousel  />
      </div>
    );
  }
}

export default App;
