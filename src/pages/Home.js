import './Home.css';
import '../Components/Button.css';
import React from 'react';

function Home() {

    return (
        <div className='home-page'>
            <h1>TYCOON32</h1>
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