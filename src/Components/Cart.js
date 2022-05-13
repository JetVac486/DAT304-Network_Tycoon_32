import React, {useState, useEffect} from 'react'
import {useCart} from 'react-use-cart';
import './Cart.css';
import {isready} from '../pages/Play';

export var thiscart = [];
export var thisrouter = "";
export var thiscables = "";
export var thisswitch = "";
export var thisaccesspoint = "";
export var thisups = "";
export var thisskap = "";
export var thisfans = "";
export var thisslukker = "";
export var thiscloud = "";
export var thissecurity = "";
export var thisisp = "";
export var thisfirewall = "";

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

    const [money, setMoney] = useState(1450);
    var increment = 10;

    function total () {
        if (money > cartTotal) {
            setMoney(money - cartTotal)
            console.log(money)
        }
        else {
            alert("You dont have enough money!");
        }
    }

    function Incidents () {
        var maxNumber = 80;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        console.log(randomNumber);
        if (randomNumber == 1){
            console.log("You have been hacked!")
            setMoney(money => money - money)
        }
        else if (randomNumber == 4){
            console.log("A power outage happened!")
            setMoney(money => money - (money/2))
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

    function SliderUpdate () {
        total()
        if (money > cartTotal) {
            thiscart = items
            console.log(thiscart)
            thiscart.forEach(element => {
                if (element.title.includes('Router')){
                    thisrouter = element;
                }
                else if (element.title.includes('Cables')){
                    thiscables = element;
                }
                else if (element.title.includes('Switch')){
                    thisswitch = element;
                }
                else if (element.title.includes('Accesspoint')){
                    thisaccesspoint = element;
                }
                else if (element.title.includes('UPS')){
                    thisups = element;
                }
                else if (element.title.includes('Sikringsskap')){
                    thisskap = element;
                }
                else if (element.title.includes('Fans')){
                    thisfans = element;
                }
                else if (element.title.includes('Brannslukker')){
                    thisslukker = element;
                }
                else if (element.title.includes('Cloud')){
                    thiscloud = element;
                }
                else if (element.title.includes('Security')){
                    thissecurity = element;
                }
                else if (element.title.includes('ISP')){
                    thisisp = element;
                }
                else if (element.title.includes('Firewall')){
                    thisfirewall = element;
                }
            });
        }
        else {
            console.log("You dont have enough money!")
        }
    }

    var MINUTE_MS = 50000;
    const MINUTE_MS2 = 60000;


    useEffect(() => {
        total();
        const interval = setInterval(() => {
            if (isready == 1) {
                increment = 25;
                setMoney(money => money + increment)
            }
            if (isready == 2) {
                increment = 250;
                setMoney(money => money + increment)
            }
            if (isready == 3) {
                increment = 1000;
                setMoney(money => money + increment)
            }
            else{
                setMoney(money => money + increment)
            }
            console.log(increment)
        }, MINUTE_MS);

        const interval2 = setInterval(() => {
            Incidents();
        }, MINUTE_MS2);

        return () => clearInterval(interval, interval2);
    }, [])


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
                                            <button className='add_item_btn btn--medium2 btn--outline' onClick={() => updateItemQuantity(item.id, item.quantity - 1 )} >-</button>
                                            <button className='minus_item_btn btn--medium2 btn--outline' onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}>+</button>
                                            <button className='remove_item btn--medium2 btn--outline' onClick={() =>  removeItem(item.id)}>Remove Item:</button>
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
                    <button className='buy_cart_btn btn--medium btn--outline' id='buy_now' onClick={SliderUpdate}>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;

// https://www.youtube.com/watch?v=B0E2esA5nQo&ab_channel=CodeWithYd