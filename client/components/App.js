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
    const user = Number.parseInt( window.localStorage.getItem("current_user")  )|| 69    // If no user is logged in, default to 1
    const local_state = JSON.parse(window.localStorage.getItem("cached_state")   ) || {}
    this.state = {
        current_item_id: 2,
        current_item_obj: {quantity:1},
        user_id: Number.parseInt( user ),    // Can be null if logged out, create conditional
        currentItemImage: [],
        applyStyle: false,
        ...local_state,
        force_cart: false
    }
    this.default_state = {...this.state }
    this.setCurrentItemImage = this.setCurrentItemImage.bind(this);
  }


  setCurrentItemImage(data) {
    this.setState((state)=> {currentItemImage:data})
  }

  setUserID(new_id){
    // Updates new user ID
    const viewstate = ()=>console.log("New State: ", this.state)
    //this.setState( { user_id:new_id }, viewstate.bind(this) )
    window.localStorage.setItem("current_user", new_id)
    window.localStorage.removeItem("cached_state")
    this.setState({...this.default_state, user_id:new_id})
    //new_id==null && window.localStorage.removeItem("cached_state")
  }

  setCurrentItem(item_id){
    // Updates new item (if user clicks different item, for example)
    console.log("\nUpdating: ", item_id)
    if( !item_id || item_id==this.state.current_item_id ){console.log("No change. Returning..."); return};
    this.setState( {current_item_id: item_id} , this.componentDidMount )    // Force re-render of current item
  }

  componentDidMount() {
    fetch(`/api/items/${this.state.current_item_id}`)
          .then((response) => response.json())
          .then((data) => {this.setState(() => ({current_item_obj: data[0]}))});
  }
  loadCart(e, return_element=false){
    console.log("LOADING CART")
    if(e.target !== e.currentTarget && return_element==false){
      return
    }
    this.setState( (state)=> {
      console.log("STATE: ", state)
      return {force_cart: !state.force_cart}
    } )
    // e.preventDefault();
  }
  getCart(){
    return(
      (this.state.force_cart)
        ? ( this.setState((state)=> {force_cart:false} ), <AddToCart closeCart={this.closeCart.bind(this)} setCurrentItem={this.setCurrentItem.bind(this)} force_cart={true} quantity={this.state.current_item_obj } user_id={this.state.user_id} current_item_obj={this.state.current_item_obj} currentImagesObj={this.state.currentItemImage}/>)
        : {}
      )
  }
  closeCart(){
    this.setState( (state)=> {
      console.log("STATE: ", state)
      return {force_cart: false}
    } )
  }


  render() {
    window.localStorage.setItem("cached_state", JSON.stringify(this.state) )
    console.log("Re-Rendered", this.state)
    return (
      <div>
        <header className={'root_header'}>
            <User change_user={ this.setUserID.bind( this ) } user_id={this.state.user_id} />
            <div className={"header_spacer"}> &emsp;&emsp;&emsp; </div>
            <div className={"tinyBox"}>
              { this.state.force_cart && this.getCart() }
            </div>
            <div className={"header_spacer"}> &emsp;&emsp;&emsp; </div>
            <img
              className={"header_img"}
              src={"https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-shopping-cart-6.png"}
              onClick={ this.loadCart.bind(this)  }
              >
            </img>

            {/* { this.state.force_cart &&  } */}



        </header>


        <SearchBar
          user_id={this.state.user_id}
          setCurrentItem={this.setCurrentItem.bind(this)}
        />
        <div className="content_wrapper">

          <aside className="left-sidebar"></aside>
          <main>
            <ImageCarousel
              item_id={this.state.current_item_id}
              callBackImage={this.setCurrentItemImage}
            />
            <Items itemsSelected={this.state} />
            <AddToCart
              setCurrentItem={this.setCurrentItem.bind(this)}
              quantity={this.state.current_item_obj }
              user_id={this.state.user_id}
              current_item_obj={this.state.current_item_obj}
              currentImagesObj={this.state.currentItemImage}
            />
          </main>
          <aside className="right-sidebar"></aside>
        </div>



        <footer></footer>

      </div>
    );
  }
}

export default App;
