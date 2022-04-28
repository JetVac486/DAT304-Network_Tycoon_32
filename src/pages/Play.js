import './Play.css';
import '../Components/console.css';
import React, { useState, useEffect } from 'react';
import Console from '../Components/Console';
import {Responsive, Service} from '../Components/Slider';
import Store from '../Components/store';

function Play() {
    
    var total_data = 14765;

    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)

    const visability = () => {
        setShow(true)
        setShow2(false)
    };
    const visability2 = () => {
        setShow2(!show2)
        setShow(false)
        
    };


    return (
        <div className='play'>
            <div className="shop-box">
                <div className="shop-menu-box">
                    <button className='btn1 btn2' onClick={visability}>Equipment</button>
                    <button className='btn1 btn2' onClick={visability2}>Incidents</button>
                    <hr className='line'/>
                </div>
                <div className="shop-content-box">
                {
                        show?<div>
                            <Store/>
                        </div>:null
                    }
                    {
                        show2?<div>
                            <p className='centered_sections'>Info</p>
                        </div>:null
                    }
                </div>
            </div>
            <div className="system-box">
                <div className='game-info'>
                    <p className='right stuff-test'>System Info</p>
                    <p className='rightish stuff-test'>??? Mb/s</p>
                    <p className='rightest stuff-test'>Total data: {total_data} Mb/s </p>
                    <hr className='line'/> 
                </div>
                <div className='components-list'>
                    <Responsive/>
                </div>
                <div className='Services-list'>
                    <Service/>
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