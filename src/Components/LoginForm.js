import React, { useState } from 'react'
import LoginValidation from './LoginValidation';
import Login from '../pages/Login';

function LoginForm({Login}) {

    const [values, setValues] = useState({name:'', email:'', password:''});
    const [errors, setErrors] = useState({});

    const HandleLogin = (event) => {
        event.preventDefault();
        setErrors(LoginValidation(values));
        Login(values);
    };


    return (
        <div className='container'>
            <div className='login-box'>
                <div>
                    <h2 className='title'>Login</h2>
                </div>
                <form className='form-box' onSubmit={HandleLogin}>
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
                    <input type="submit" className="login login-btn" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default LoginForm;