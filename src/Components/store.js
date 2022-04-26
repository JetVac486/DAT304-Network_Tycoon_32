import React from 'react'
import Itemcard from './Itemcard';
import data from './data';
import Cart from './Cart';
import {CartProvider} from 'react-use-cart';
import './store.css';

function Store() {

    return (
        <div>
            <CartProvider>
                <section className='box_container'>
                    <div className='column'>
                        {data.productData.map((item, index)=>{
                            return(
                                <Itemcard 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    price={item.price} 
                                    item={item}
                                    key={index} 
                                />
                            )
                        })}
                    </div>
                </section>
                <Cart/>
            </CartProvider>
        </div>
    )
}

export default Store;