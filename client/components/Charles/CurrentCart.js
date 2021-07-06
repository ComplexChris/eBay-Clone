import React from 'react';

class CurrentCart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    navigate_item(item_id, e){
        // Used on line 44
        // Allows user to click on item to go to that item page
        console.log("ITEM", item_id)
        this.props.setCurrentItem( item_id );
        this.props.currentCart(e)    // To toggle modal
        e.preventDefault();
    }


    render () {
        return (
            <div className={"modal"} onClick={this.props.currentCart} >
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


                            {this.props.cartItems.map((item, index)=>{
                                return (
                                <div className={"itemAddedWrapper"} key={item.name+index}>
                                    <div className={"itemImg"}>
                                        <img src={`${item.image_url}`} height="75" width="75"></img>
                                    </div>
                                    <div className={"itemSpecifics"}>
                                        <div onClick={ this.navigate_item.bind(this, item.id) } className={"itemSpecificsTitle navigate_item"}>{item.name}</div>
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
