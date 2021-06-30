import React, { Component } from "react";
import ImageCarousel from "./Images/ImageCarousel";
import AddToCart from "./Charles/AddToCart";
import Items from "./Items/Items";
import SearchBar from "./Search Bar/SearchBar";

class App extends Component {
  constructor(){
    super();
    const user = window.localStorage.getItem("current_user")  || 1    // If no user is logged in, default to 1
    this.state = {
        current_item: 1,
        user_id: Number.parseInt( user ),    // Can be null if logged out, create conditional

    }
  }

  setUserID(new_id){
    // Updates new user ID
    this.setState( { user_id:new_id } )
  }

  setCurrentItem(item_id){
    // Updates new item (if user clicks different item, for example)
    this.setState( { current_item:item_id } )
  }


  componentDidMount() {
    // Deleted Cart fetch.
  }

  render() {
    return (
      <div>
        <SearchBar change_user={ this.setUserID.bind( this ) } />
        <AddToCart user_id={this.state.user_id} />
        <Items current_item={this.state.current_item} />
        <ImageCarousel current_item={this.state.current_item} />
      </div>
    );
  }
}

export default App;
