import React, { Component } from "react";
import ImageCarousel from "./Images/ImageCarousel";
import AddToCart from "./Charles/AddToCart";
import Items from "./Items/Items";
import SearchBar from "./Search Bar/SearchBar";

class App extends Component {
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
    return (
      <div>
        <SearchBar />
        <ImageCarousel/>
        <Items itemsSelected={this.state}/>
        <AddToCart itemAdded={this.state}/>
      </div>
    );
  }
}

export default App;
