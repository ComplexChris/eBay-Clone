import React from 'react';

class CurrentCart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }

        
        
       
    }

    render () {

        return (
            <div className={"modal"}>
                <div className={"currentCart"}>
                    <div className={'currentCartTitleBar'}>
                        {this.props.sizeOfCart} item{this.props.sizeOfCart > 1 ? "s" : ""} added to cart 
                        
                        <img 
                            src="close.svg" 
                            className={'closeBtn'} 
                            onClick={this.props.currentCart}>
                        </img>
                    </div>
                        <div className={'itemAdded'}>
                        <div className={"overflowContainer"}>


                            {this.props.cartItems.map((item)=>{
                                return (
                                <div className={"itemAddedWrapper"} key={item.id}>
                                    <div className={"itemImg"}>
                                        <img src={`${item.image_url}`} height="75" width="75"></img>
                                    </div>
                                    <div className={"itemSpecifics"}>
                                        <div className={"itemSpecificsTitle"}>{item.name}</div>
                                        <div className={"itemSpecificsPrice"}>
                                            <div className={"itemPriceText"}>Price</div>
                                            <div className={"itemDollarAmt"}>US {item.price}</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}

                        </div>

                        <button className={"checkoutBtn"}>  
                        Checkout {this.props.sizeOfCart} item{this.props.sizeOfCart > 1 ? "s" : ""}
                        </button>
                        <button className={"goToCartBtn"}>Go to cart</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default CurrentCart;