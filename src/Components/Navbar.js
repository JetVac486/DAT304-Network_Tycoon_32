import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaPhoenixSquadron } from "react-icons/fa";
/*
Kilder:
https://www.freecodecamp.org/news/how-to-use-react-icons/
https://react-icons.github.io/react-icons/icons?name=fa
*/

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo spaced-logo' onClick={closeMobileMenu}>
                        <FaPhoenixSquadron/>  
                        <p class='spaced-logo'>TYCOON32</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/play' className='nav-links' onClick={closeMobileMenu}>
                                Play
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={event =>  window.location.href='/signup'}>SIGN IN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;