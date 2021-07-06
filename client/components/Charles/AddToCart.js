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



    sendRequest () {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({itemId: this.props.current_item_obj.id, userId: this.props.user_id})
            }

        fetch("/api/cart/", requestOptions)
              .then((response) => response.json())
              .then((data) => {
              });
    }

    componentDidMount () {

        fetch(`/api/cart/${this.props.user_id}`)
              .then((response) => response.json())
              .then((data) => {
                  
             return Promise.all(
                  data.map((cartItem)=>{
                    return fetch(`/api/items/${cartItem.itemid}`)
                        .then((response) => response.json())
                        .then((data)=> data[0])
                    })
              )

        }).then((itemInfo)=> this.setState({cartItems: itemInfo}));
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

            this.sendRequest();
        }
      }


    render () {
        return (
            <div className={"cartContainer"}>
                {this.state.currentCart && <CurrentCart
                currentCart={this.clickEvent}
                cartItems={this.state.cartItems}
                cartImgs={this.props.currentImagesObj}
                sizeOfCart={Object.values(this.state.cartItems).length}
                />}

                <div className={'ecommerceCard'}>

                    <button className={'addToCartBtn'} onClick={this.clickEvent}>Add to cart</button>


                </div>
            </div>
        );
    }
 }

 export default AddToCart;