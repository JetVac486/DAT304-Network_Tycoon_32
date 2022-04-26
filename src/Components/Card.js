import React, { useEffect, useState } from 'react'
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} className='card_img'/>
            <div className='card_body'>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.description}</p>
                <h3 className='card_price'>{props.price}</h3>
                <button className='card_btn'>ADD TO CART</button>
            </div>
        </div>
    )
}


export default Card;