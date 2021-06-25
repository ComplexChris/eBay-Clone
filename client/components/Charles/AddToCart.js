import React from 'react';

 class AddToCart extends React.Component {
    constructor () {
        super();

        this.state = {
            currentCart:false
        }

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent () {

        this.setState({currentCart:true});

        console.log(this.state)
      }

    render () {
        return (
            <div className={'ecommerceCard'}>
                 <button className={'buyItNowBtn'}>Buy It Now</button>
                 <button className={'addToCartBtn'} onClick={this.clickEvent}>Add to cart</button>
                 <button className={'addToWatchlistBtn'}>Add to Watchlist</button>
                 <div className={'heartImg'}> <img src='heart.svg' height='12px' width='12px'></img></div>      
            </div>
        )
    }
 }

 export default AddToCart;