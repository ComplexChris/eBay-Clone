import React from "react";
import "./styles/styles.css";

const Items = (props) => {
    return (
                <div className={'itemComponents'}>
                    <div className={'itemDescHeader'}>
                        <h1 className={'itemH1'}>{props.itemsSelected.current_item_obj.name}</h1>
                    </div>
                    <hr className={'itemHr'}/>
                    <div>
                        <div className={'itemDivPadding'}>
                            Condition: {props.itemsSelected.current_item_obj.description}
                        </div>
                        <div className={'itemDivPadding'}>
                            Model: {props.itemsSelected.current_item_obj.model}
                        </div>
                        <div className={'itemDivPadding'}>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type='text' defaultValue='1' size='4'/>
                        </div>
                        <hr className={'itemHr'}/>
                        <div className={'itemDivPadding'}>
                            Price: <span className={'itemPrice'}>{'US  ' + props.itemsSelected.current_item_obj.price}</span>
                        </div>
                    </div>
                </div>
        )
}
export default Items;
