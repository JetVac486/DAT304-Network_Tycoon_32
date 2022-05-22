import React, { useState, useEffect } from 'react'
import LoginValidation from './LoginValidation';
import Axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { shj2 } from './Navbar';

export var shit = "hi";
export var shj = false;

function LoginForm({Login}) {

    const [values, setValues] = useState({name:'', email:'', password:''});
    const [errors, setErrors] = useState({});
    const [loginStatus, setLoginStatus] = useState("");
    const [loggedIn, setLoggedIn] = useState(Boolean);
    
    
    const login = (e) => {
        e.preventDefault();
        setErrors(LoginValidation(values));
        Axios.post('http://localhost:3001/login', {
            username: values.name, 
            email: values.email, 
            password: values.password
        })
        .then((response) => {
            if(response.data.message){
                console.log(response.data.message)
                setLoginStatus(response.data.message)
            }
            else{
                console.log(response.data)
                setLoginStatus(response.data[0].Username)
                setLoggedIn(true);
                shit = response.data[0].Username
                shj = true
            }
        });
    }

    const Logout = () => {
        setValues({name:'', email:'', password:''});
        setLoggedIn(false);
        setLoginStatus("");
        shit = "";
        shj = false;
    }

    const HandleLogin = (event) => {
        event.preventDefault();
        console.log(loginStatus)
        Login(values);
    };

    const MINUTE_MS3 = 1000;

    useEffect(() => {
        
        const data_transfer = setInterval(() => {
            if (shj2 == 1) {
                Logout();
            }
        }, MINUTE_MS3);

        return () => clearInterval(data_transfer);
    }, [])

    return (
        <div className='login-page'>
            {(loggedIn != true) ? (
                <div className='container'>
                    <div className='login-box'>
                        <div>
                            <h2 className='title'>Login</h2>
                        </div>
                        <form className='form-box'>
                            <div className='name'>
                                <label className='label'>Name</label>
                                <input className='input' type='text' name='name' value={values.name} onChange={event => setValues({...values, name: event.target.value})}/>
                                {errors.name && <p className='error'>{errors.name}</p>}
                            </div>
                            <div className='email'>
                                <label className='label'>Email</label>
                                <input className='input' type='email' name='email' value={values.email} onChange={event => setValues({...values, email: event.target.value})}/>
                                {errors.email && <p className='error'>{errors.email}</p>}
                            </div>
                            <div className='password'>
                                <label className='label'>Password</label>
                                <input className='input' type='password' name='password' value={values.password} onChange={event => setValues({...values, password: event.target.value})}/>
                                {errors.password && <p className='error'>{errors.password}</p>}

                            </div>
                            <div>
                                <h2 className='combination-error'>{loginStatus}</h2>
                                <button className="login login-btn fixed-pos" onClick={login} >Login</button>
                                <a className='link' href="/register">Dont have an account?</a>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="welcome-msg">
                    <h2 className='title'>Welcome {loginStatus}</h2>
                    <Link to='/play'style={{ textDecoration: 'none' }}>
                        <button className='login login-btn2'>START PLAYING</button>
                    </Link>
                    <button className='login login-btn2' onClick={Logout}>Logout</button>
                </div>
            )}
        </div> 
    )
}

export default LoginForm;