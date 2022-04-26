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
                price="34.5"
            />
            <Card
                id="cables"
                img="https://tipsmake.com/data/thumbs/basic-information-about-network-equipment-thumb-NTW2CSBzt.jpg" 
                title="cables" 
                description="good cables"
                price="3.5"
            />
            <Card
                id="switch"
                img="https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/cisco_switch.jpg" 
                title="switch" 
                description="48 ports"
                price="65.5"
            />
        </div>
    )
}

function EnvironmentalCards() {
    return (
        <div className='wrapper'>
            <Card
                id="sikringsskap"
                img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453039_sd.jpg;maxHeight=640;maxWidth=550" 
                title="sikringsskap" 
                description="god kvalitet"
                price="54.5"
            />
            <Card
                id="brannslukker"
                img="https://tipsmake.com/data/thumbs/basic-information-about-network-equipment-thumb-NTW2CSBzt.jpg" 
                title="brannslukker" 
                description="stopper brann"
                price="12.5"
            />
            <Card
                id="aggregat"
                img="https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/cisco_switch.jpg" 
                title="aggregat" 
                description="for strømbrudd"
                price="27.5"
            />
        </div>
    )
}

function Services() {
    return (
        <div className='wrapper'>
            <Card
                id="cloud"
                img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453039_sd.jpg;maxHeight=640;maxWidth=550" 
                title="cloud" 
                description="for backup"
                price="54.5"
            />
            <Card
                id="security"
                img="https://tipsmake.com/data/thumbs/basic-information-about-network-equipment-thumb-NTW2CSBzt.jpg" 
                title="security" 
                description="extra sikkerhet"
                price="12.5"
            />
            <Card
                id="internett"
                img="https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/cisco_switch.jpg" 
                title="internett" 
                description="god tilkobling"
                price="27.5"
            />
        </div>
    )
}

export {EquipmentCards, EnvironmentalCards, Services};