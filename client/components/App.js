import React, { Component } from "react";
// import Images from "./Display Items/Images";
// import ImageCarousel from "./Display Items/ImageCarousel";
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
        <AddToCart />
        {/* <Images images={this.props.images} />
        <ImageCarousel images={this.props.Carousel()} /> */}
      </div>
    );
  }
}

export default App;
