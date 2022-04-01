import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import './Login.css';

function Login() {

    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({name:'', email:''});


    const Login = values => {
        console.log(values);

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
    }

    const Logout = () => {
        setUser({name:'', email:''});
    }

    return (
        <div className='login-page'>
            {(user.email !='') ? (
                <div className="welcome-msg">
                    <h2 className='title'>Welcome, <span>{user.name}</span></h2>
                    <button className='login login-btn2' onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login}/>
            )
        }
        </div>
    )
}

export default Login;