import React from 'react';
import '../pages/Register.css';

function RegisterSuccessForm() {

    return (
        <div className='container'>
            <div className='register-box'>
                <h1 className='form-success'>Account Created!</h1>
                <button className='register login-btn' onClick={event =>  window.location.href='/login'}>Login</button>
            </div>
        </div>
    )
}

export default RegisterSuccessForm;