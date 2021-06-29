import React from 'react';
import CurrentCart from './CurrentCart.js';
import "./styles/styles.css";

 class AddToCart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentCart:false
        }

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent () {
        this.setState({currentCart:!this.state.currentCart});
      }

    render () {
        return (
            <div className={"cartContainer"}>
                {this.state.currentCart && <CurrentCart 
                currentCart={this.clickEvent}
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