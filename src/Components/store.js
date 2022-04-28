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
                    <div className='columns'>
                        <p className='centered_sections'>Network</p>
                        <hr class="line2"></hr>
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
                        <p className='centered_sections'>Environment</p>
                        <hr class="line2"></hr>
                        {data.evironmentData.map((item, index)=>{
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
                        <p className='centered_sections'>Services</p>
                        <hr class="line2"></hr>
                        {data.serviceData.map((item, index)=>{
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