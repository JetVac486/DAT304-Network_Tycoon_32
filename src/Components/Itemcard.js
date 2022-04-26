import React, { useEffect, useState } from 'react'
import './Card.css';
import {useCart} from 'react-use-cart';

function Itemcard(props) {
    const {addItem} = useCart();

    return (
        <div className='card'>
            <img src={props.img} className='card_img'/>
            <div className='card_body'>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.desc}</p>
                <h3 className='card_price'>{props.price}</h3>
                <button className='card_btn' onClick={() => addItem(props.item)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Itemcard;