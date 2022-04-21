import React from 'react'
import Card from './Card';

function EquipmentCards() {
    return (
        <div className='wrapper'>
            <Card
                id="router"
                img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453039_sd.jpg;maxHeight=640;maxWidth=550" 
                title="router" 
                description="fast router"
                price="34.99"
            />
            <Card
                id="cables"
                img="https://tipsmake.com/data/thumbs/basic-information-about-network-equipment-thumb-NTW2CSBzt.jpg" 
                title="cables" 
                description="good cables"
                price="3.49"
            />
            <Card
                id="switch"
                img="https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/cisco_switch.jpg" 
                title="switch" 
                description="48 ports"
                price="65.49"
            />
        </div>
    )
}

export default EquipmentCards