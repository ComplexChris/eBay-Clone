import React, { Component } from "react";
import "./styles/search_style.css";



function ShowResults(props){
    const resQty = props.result_items.length
    const titleMsg = (resQty<=0) ? "No results found" : `    `
    return (
        <div className={'results_modal'} onClick={props.close.bind(this)} >
            <div className={"resultsBox"}>
                <div className={'resultsTitleBar'}>
                    {props.result_items.length} results found.
                    <img
                        src="close.svg"
                        className={'closeBtn'}
                        onClick={props.close.bind(this) }
                        >
                    </img>
                </div>
                <div className={'resultsItemAdded'}>
                    <div className={"results_overflowContainer"}>
                        {props.result_items.map((item)=>{
                            return (
                            <div id={ item.id } className={"results_itemAddedWrapper"} key={item.id} onClick={ props.updateItem.bind(this) } >

                                <div className={"itemSpecifics"}>
                                    <div className={"itemSpecificsTitle"}>{item.name}</div>
                                    <div className={"itemSpecificsPrice"}>
                                        <div className={"itemPriceText"}>Price</div>
                                        <div className={"itemDollarAmt"}>US {item.price}</div>
                                    </div>

                                </div>
                                <div> <hr className={'itemBorder'}/> </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>    // Closer for modal class
    );
}

export default ShowResults;
