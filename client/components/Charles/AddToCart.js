import React from 'react';
import CurrentCart from './CurrentCart.js';
import "./styles/styles.css";

 class AddToCart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentCart:false,
            cartItems: []
        }

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent () {
        this.setState({currentCart:!this.state.currentCart}); // toggles modal

        if(this.state.currentCart === false) {
            this.setState((state)=>{
                return (
                    {cartItems:state.cartItems.push(this.props.current_item_obj)},
                    console.log('current items in cart: ',this.state.cartItems)
                )
            })
        }
      }

    render () {
        console.log('Gg we lost', this.props.current_item_obj)
        return (
            <div className={"cartContainer"}>
                {this.state.currentCart && <CurrentCart
                currentCart={this.clickEvent}
                cartItems={this.state.cartItems}
                sizeOfCart={Object.values(this.state.cartItems).length}
                />}

                <div className={'ecommerceCard'}>
                    <button className={'buyItNowBtn'}>Buy It Now</button>
                    <button className={'addToCartBtn'} onClick={this.clickEvent}>Add to cart</button>
                    <button className={'addToWatchlistBtn'}>Add to Watchlist</button>
                    <div className={'heartImg'}> <img src='heart.svg' height='12px' width='12px'></img></div>
                </div>
            </div>
        );
    }
 }

 export default AddToCart;
