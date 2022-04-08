import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import './Login.css';
import loggedIn from '../Components/LoginForm';
import setLoggedIn from '../Components/LoginForm';

function Login() {

    // const adminUser = {
    //     email: 'admin@admin.com',
    //     password: 'admin123'
    // }

    const [user, setUser] = useState({name:'', email:''});
    

    
    const Login = values => {
        console.log(values)
        console.log(loggedIn)
    }

    const Logout = () => {
        setUser({name:'', email:''});
    }

    return (
        <div className='login-page'>
            {(loggedIn != true) ? (
                <LoginForm Login={Login}/>
            ) : (
                <div className="welcome-msg">
                    <h2 className='title'>Successfully Logged In</h2>
                    <button className='login login-btn2' onClick={Logout}>Logout</button>
                </div>
            )
        }
        </div>
    )
}

export default Login;

/*
if (values.email == adminUser.email && values.password == adminUser.password){
            console.log('Logged In');
            setUser({
                name: values.name,
                email: values.email
            });
        }
        else {
            console.log('Details do not match!');
        }
*/