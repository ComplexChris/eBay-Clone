import React, { Component } from "react";
import ImageCarousel from "./Images/ImageCarousel";



class App extends Component {
  componentDidMount() {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        {/* <SearchBar />
        <AddToCart />
        <Items /> */}
        <ImageCarousel/>
      </div>
    );
  }
}

export default App;
