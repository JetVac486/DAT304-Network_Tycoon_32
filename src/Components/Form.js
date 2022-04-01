import React, { useState } from 'react'
import RegisterForm from './RegisterForm';
import RegisterSuccessForm from './RegisterSuccessForm';

function Form() {

    const [formIsRegistered, setFormIsRegistered] = useState(false);

    function signupForm() {
        setFormIsRegistered(true);
    }

    return <div>{!formIsRegistered ? <RegisterForm signupForm={signupForm}/> : <RegisterSuccessForm/>}</div>;
};

export default Form;

/*Kilde: https://www.youtube.com/watch?v=WvRwiE9IkFg&t=1s */