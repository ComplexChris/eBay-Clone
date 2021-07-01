import React from "react";
import "./styles/styles.css";

const Items = (props) => {
    console.log('items', props.itemsSelected.item.name)
    return (
                <div className={'itemComponents'}>
                    <div className={'itemDescHeader'}>
                        <h2 className={'itemH2'}>{props.itemsSelected.item.name}</h2>
                    </div>
                    <hr className={'itemHr'}/>
                    <div>
                        <div className={'itemDivPadding'}>
                            Condition: {props.itemsSelected.item.description}
                        </div>
                        <div className={'itemDivPadding'}>
                            Model: {props.itemsSelected.item.model}
                        </div>
                        <div className={'itemDivPadding'}>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type='text' defaultValue='1' size='4'/>
                        </div>
                        <hr className={'itemHr'}/>
                        <div className={'itemDivPadding'}>
                            Price: <span className={'itemPrice'}>{'US  ' + props.itemsSelected.item.price}</span>
                        </div>
                    </div>
                </div>
        )
}
export default Items;
