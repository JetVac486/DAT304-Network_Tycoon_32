import './Play.css';
import '../Components/console.css';
import React, { useState, useEffect } from 'react';
import Console from '../Components/Console';
import {Responsive, Environmental, Service} from '../Components/Slider';
import Store from '../Components/store';
import { thiscart } from '../Components/Cart';

export var isready = 0;
export var payout = [];

function Play() {
    
    const [router_datas, setRouterdatas] = useState(100);
    const [totaldata,setTotaldata] = useState(0);
    var increment = 0.1;

    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)

    const visability = () => {
        setShow(!show)
        setShow2(false)
    };
    const visability2 = () => {
        setShow2(!show2)
        setShow(false)
        
    };
    /*
    4 stages av utstyr: 
    - Starter (Basic)
    - Normal
    - Good
    - Exelent /Powerfull 
    */
   var normalitem = "";
    var gooditem = "";
    var powerfullitem = "";

    function gooddata () {
        thiscart.forEach(element => {
            if (element.title.includes('Normal')){
                gooditem = element;
                increment = 0.2;
                isready = 1;
                setRouterdatas(200);
            }
            if (element.title.includes('Good')){
                gooditem = element;
                increment = 0.5;
                isready = 2;
                setRouterdatas(500);
            }
            if (element.title.includes('Powerfull')){
                powerfullitem = element;
                console.log(powerfullitem)
                increment = 1;
                isready = 3;
                setRouterdatas(1000);
            }
        });
    }

    const MINUTE_MS3 = 5000;

    useEffect(() => {
        const data_transfer = setInterval(() => {
            gooddata();
            setTotaldata(totaldata => parseFloat((totaldata + increment).toFixed(2)));
        }, MINUTE_MS3);

        return () => clearInterval(data_transfer);
    }, [])

    return (
        <div className='play'>
            <div className="shop-box">
                <div className="shop-content-box">
                    <Store/>
                </div>
            </div>
            <div className="system-box">
                <div className='game-info'>
                    <button className='btn3 right stuff-test ' onClick={visability}>System Info</button>
                    <button className='btn3 right stuff-test ' onClick={visability2}>Incidents</button>
                    <p className='rightish stuff-test'>{router_datas} Mb/s</p>
                    <p className='rightest stuff-test'>Total data: {totaldata} Gb/s </p>
                    <hr className='line'/> 
                </div>
                {
                    show?<div>
                        <div className='components-list'>
                            <Responsive/>
                        </div>
                        <div className='environmentals-list'>
                            <Environmental/>
                        </div>
                        <div className='Services-list'>
                            <Service/>
                        </div>
                    </div>:null
                }
                {
                    show2?<div>
                        <p className='centered_sections'>Incidents</p>
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
                    </div>:null
                }

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