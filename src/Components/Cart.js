import React, {useState, useEffect} from 'react'
import {useCart} from 'react-use-cart';
import './Cart.css';

const Cart = () => {
    const { 
        isEmpty, 
        totalUniqueItems, 
        items, 
        totalItems, 
        cartTotal, 
        updateItemQuantity, 
        removeItem, 
        emptyCart, 
    } = useCart();

    const [money, setMoney] = useState(145);
    //const [pause,setPause] = useState(false);

    function total () {
        if (money > cartTotal) {
            setMoney(money - cartTotal)
            console.log(money)
        }
        else {
            console.log("You dont have enough money!");
        }
    }

    function Incidents () {
        var maxNumber = 25;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        console.log(randomNumber);
        if (randomNumber == 1){
            console.log("You have been hacked!")
            setMoney(money => money - money)
        }
        else if (randomNumber == 4){
            console.log("A power outage happened!")
            setMoney(money => money - (money/2))
            //setPause(true);
        }
        else if (randomNumber == 7){
            console.log("Equipment failure!")
            setMoney(money => money - (money/4))
        }
        else if (randomNumber == 21){
            console.log("Your internett went down!")
            setMoney(money => money - (money/2))
        }
        else {
            console.log("bye")
        }
        return randomNumber;
    }

    const MINUTE_MS = 10000;
    const MINUTE_MS2 = 20000;

    useEffect(() => {
        total();
        const interval = setInterval(() => {
            setMoney(money => money + 10)
        }, MINUTE_MS);

        const interval2 = setInterval(() => {
            Incidents();
        }, MINUTE_MS2);

        return () => clearInterval(interval, interval2);
    }, [])

    /*
        if (pause == true) {
            const timer = setTimeout(interval, 20000);
            return () => clearTimeout(timer);
        }
        */

    if(isEmpty) return <h1 className='empty_cart_txt'>Your Cart is Empty</h1>

    return (
        <section className='cart'>
            <div className='cart_info'>
                <div>
                    <p className='items_in_cart'>Cart ({totalUniqueItems}) Total Items: ({totalItems})</p>
                    <hr class="line"></hr>
                    <table>
                        <tbody>
                            {items.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td className='cart_items'>
                                            <img src={item.img} style={{height: '6rem', width: '6rem'}} />
                                        </td>
                                        <td className='cart_items'>{item.title}</td>
                                        <td className='cart_items'>{item.price}</td>
                                        <td className='cart_items'>Quantity ({item.quantity}) </td>
                                        <td>
                                            <button className='add_item_btn btn--medium btn--outline' onClick={() => updateItemQuantity(item.id, item.quantity - 1 )} >-</button>
                                            <button className='minus_item_btn btn--medium btn--outline' onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}>+</button>
                                            <button className='remove_item btn--medium btn--outline' onClick={() =>  removeItem(item.id)}>Remove Item:</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <hr class="line"></hr>
                <div className='div_money'>
                    <p className='total_price'>Total Price: $ {cartTotal} </p>
                    <p className='money_left'>Money Left: {money}</p>
                </div>
                <hr class="line"></hr>
                <div>
                    <button className='cart_clear btn--medium btn--outline' onClick={() => emptyCart()}>Clear Cart</button>
                    <button className='buy_cart_btn btn--medium btn--outline' onClick={() => total()}>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;

// https://www.youtube.com/watch?v=B0E2esA5nQo&ab_channel=CodeWithYd