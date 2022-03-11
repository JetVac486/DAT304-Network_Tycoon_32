import './Home.css';
import {Button} from "../Components/Button";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';

function Home() {

    return (
        <div className='home-page'>
            <h1>TYCOON32</h1>
            <p>- Experience a new way to build and configure a realistic network setup</p>
            <div className='home-btns'>
                <switch>
                <Link to='/play'>
                        <Button className='play-btn' buttonStyle='btn--outline' buttonSize='btn--large' >START PLAYING</Button>
                    </Link>
                </switch>
            </div>
        </div>
    );
}

export default Home;