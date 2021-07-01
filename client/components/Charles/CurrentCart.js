import React from 'react';

class CurrentCart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }
        ;
    }
    
    
    render () {
        console.log("Current Cart", this.props.sizeOfCart)
        return (
            <div className={'modal'}>
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

                            {console.log('gg we won:', this.props.cartItems)}

                            {this.props.cartItems.map((item)=>{
                                return (
                                <div className={"itemAddedWrapper"}>
                                    <div className={"itemImg"}>
                                        <img src="placeholder.jpeg" height="75" width="75"></img>
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

                        <div className={'qualifyBox'}>
                            <h1>Spend $43.79 to qualify</h1>
                            <h3>Extra 20% off $65 or more. <a>Shop now</a></h3>
                        </div>
                        <button className={"checkoutBtn"}>  
                        Checkout {this.props.sizeOfCart} item{this.props.sizeOfCart > 1 ? "s" : ""}
                        </button>
                        <button className={"goToCartBtn"}>Go to cart</button>
                    </div>
                    <div className={"boughtTogether"}>
                        <h1 className={"boughtTogetherTitle"}>People who viewed this item also viewed</h1>
                        <div className={"boughtTogetherImgBox"}><img src='band.jpeg' height="115px" width="115px"></img></div>
                        <div className={"boughtTogetherImgBox"}><img src='gun.jpeg' height="115px" width="115px"></img></div>
                        <div className={"boughtTogetherImgBox"}><img src='electric.jpeg' height="115px" width="115px"></img></div>

                        <div className={"boughtTogetherImgDesc"}>
                            <span>THE CRANBERRIES</span>
                            <br></br><br></br>
                            
                            <h1>US $24.99</h1>
                        </div>
                        <div className={"boughtTogetherImgDesc"}>
                            <span>PAINTBALL GUN AUTO-RELOAD</span>
                            <br></br><br></br>
                            
                            <h1>US $85.95</h1>
                        </div>
                        <div className={"boughtTogetherImgDesc"}>
                            <span>ELECTRIC FIREPLACE</span>
                            <br></br><br></br>
                            
                            <h1>US $1999.99</h1>
                        </div>
                        
                        <button className={'seeAllBtn'}>See all</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentCart;