import './Play.css';
import '../Components/console.css';
import React, { useState, useEffect } from 'react';
import EquipmentCards from '../Components/EquipmentCards';
import useCustomHook from '../Components/customHook';
import Console from '../Components/Console';
import sum from '../Components/Card';
import Responsive from '../Components/Slider';

function Play() {
    
    function total () {
        console.log(sum)
    }

    const {money, setMoney} =useCustomHook();

    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [show4,setShow4] = useState(false)
    const [show5,setShow5] = useState(false)
    const [show6,setShow6] = useState(false)

    const visability = () => {
        setShow(true)
        setShow2(false)
    };
    const visability2 = () => {
        setShow2(!show2)
        setShow(false)
        
    };
    const visability3 = () => {
        setShow3(!show3)
        setShow4(false)
        setShow5(false)
        setShow6(false)
    };
    const visability4 = () => {
        setShow4(!show4)
        setShow3(false)
        setShow5(false)
        setShow6(false)
    };
    const visability5 = () => {
        setShow5(!show5)
        setShow6(false)
        setShow3(false)
        setShow4(false)
    };
    const visability6 = () => {
        setShow6(!show6)
        setShow5(false)
        setShow3(false)
        setShow4(false)
        
    };
/*
    const MINUTE_MS = 15000;

    useEffect(() => {
    const interval = setInterval(() => {
        setMoney(money => money + 10)
        console.log(money)
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
*/
    return (
        <div className='play'>
            <div className="shop-box">
                <div className="shop-menu-box">
                    <button className='btn1 btn2' onClick={visability}>Equipment</button>
                    <button className='btn1 btn2' onClick={visability2}>Incidents</button>
                    <hr className='line'/>
                    {
                        show?<div>
                            <button className='btn1 btn2' onClick={visability3}>Network</button>
                            <button className='btn1 btn2' onClick={visability4}>Environmental</button>
                        </div>:null
                    }
                    {
                        show2?<div>
                            <button className='btn1 btn2' onClick={visability5}>Services</button>
                            <button className='btn1 btn2' onClick={visability6}>Info</button>
                        </div>:null
                    }
                </div>
                <div className="shop-content-box">
                    {
                        show3?<div>
                            <EquipmentCards/>
                        </div>:null
                    }
                    {
                        show4?<div>
                            <h1>this is another test!</h1>
                        </div>:null
                    }
                    {
                        show5?<div>
                            <h1>this is a test!</h1>
                        </div>:null
                    }
                    {
                        show6?<div>
                            <h1>this is yet another test!</h1>
                        </div>:null
                    }
                </div>
                <div className='shop-checkout-box'>
                    <div className='content'>
                        <p className='stuff-test'>Total: {total}$</p>
                        <button className='buy_btn btn-outline btn-medium' onClick={total} >BUY</button>
                    </div>
                </div>
            </div>
            <div className="system-box">
                <div className='game-info'>
                    <p className='right stuff-test'>System Info</p>
                    <p className='rightish stuff-test'>??? Mb/s</p>
                    <p className='rightest stuff-test'>{money}$</p>
                    <hr className='line'/> 
                </div>
                <div className='components-list'>
                    <Responsive/>
                </div>
                <div className='Services-list'>
                    <Responsive/>
                </div>
                <div className='Security-list'>
                    <div className='column'>
                        <p>Security</p>
                        
                    </div>
                    <div className='column right-end'>
                        <p>Business rates</p>
                        <h3 className='small-size'>Growth</h3>
                        <h3 className='small-size'>Income</h3>
                        <h3 className='small-size'>Stability</h3>
                        <h3 className='small-size'>Trust</h3>
                    </div>
                </div>
            </div>
            <div className="cmd-box">
                <div className='console'>
                    <Console />
                </div>
            </div>
        </div>
    )
}

export default Play;