import React, { useEffect, useState } from 'react'
import './Card.css';
import useCustomHook from './customHook';
import EquipmentCards from './EquipmentCards';

const data = [];

function Card(props) {

    const { money, setMoney } =useCustomHook();

    var sum = 0;

    function handleCart(event) {
        event.stopPropagation();
        if (money > props.price) {
            console.log("Successfully Bought!");
            data.push(props.price)
            data.map(function cart (item) {
                sum += parseFloat(item,10);
                return sum;
            })
            console.log(data)
            console.log(sum)
            
        }
        else {
            console.log("Too expensive!"); 
        }
    }



    return (
        <div className='card'>
            <img src={props.img} className='card_img'/>
            <div className='card_body'>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.description}</p>
                <h3 className='card_price'>{props.price}</h3>
                <button className='card_btn' onClick={handleCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card;