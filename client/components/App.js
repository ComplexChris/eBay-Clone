import React, { Component } from "react";
import "./root_style.css";

import ImageCarousel from "./Images/ImageCarousel";
import AddToCart from "./Charles/AddToCart";
import Items from "./Items/Items";
import SearchBar from "./Search Bar/SearchBar";
import User from "./User/User";

class App extends Component {
  constructor(){
    super();
    const user = window.localStorage.getItem("current_user")  || 69    // If no user is logged in, default to 1
    this.state = {
        current_item_id: 1,
        current_item_obj: {quantity:1},
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
    fetch(`/api/items/${this.state.current_item_id}`)
          .then((response) => response.json())
          .then((data) => {this.setState(() => ({current_item_obj: data[0]}))});
  }

  render() {
    return (
      <div>
        <header>
          <User user_id={this.state.user_id} />
        </header>


        <SearchBar change_user={ this.setUserID.bind( this ) }  user_id={this.state.user_id} />
        <div className="content_wrapper">
        
          <aside className="left-sidebar"></aside>
          <main>
            <ImageCarousel item_id={this.state.current_item_id} />
            <Items itemsSelected={this.state} />
            <AddToCart quantity={this.state.current_item_obj } user_id={this.state.user_id} current_item_obj={this.state.current_item_obj}  />
          </main>
          <aside className="right-sidebar"></aside>
        </div>



        <footer></footer>

      </div>
    );
  }
}

export default App;
