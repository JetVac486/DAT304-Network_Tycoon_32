import './Home.css';
import '../Components/Button.css';
import React, { useEffect, useState } from 'react';


function Home() {
    useEffect(() => {
        console.warn ("working?")
        alert("agressive alert") }, [])
    return (
        <div className='home-page'>
          
            <h1>TYCOON3200000</h1>
            <p>- Experience a new way to build and configure a realistic network setup</p>
            <div className='home-btns'>
                <switch>
                    <button className='login login-btn2' onClick={event =>  window.location.href='/login'}>JOIN NOW</button>
                </switch>
            </div>
        </div>
    );
}

 /* Kilde: https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page */

export default Home;