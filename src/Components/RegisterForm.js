import React, {useEffect, useState} from 'react';
import RegisterValidation from './RegisterValidation';
import './Register.css';
import Axios from 'axios';


const RegisterForm = ({signupForm}) => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({});
    const [inputIsCorrect, setInputIsCorrect] = useState(Boolean);

    const register = (e) => {
        e.preventDefault();
        setErrors(RegisterValidation(values));
        Axios.post('http://localhost:3001/register', {
            username: values.name, 
            email: values.email, 
            password: values.password
        })
        if(Object.keys(errors).length === 0 && values.name !="", values.email !="", values.password !="") {
            setInputIsCorrect(true)
            console.log("input is correct, and accepted!")
        }
        else {
            setInputIsCorrect(false)
            console.log("fill in missing information!")
        }
    }

    const HandleChange = (event) =>{
        setValues({
            ...values, 
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && inputIsCorrect){
            console.log(values);   
        }
    }, [errors]);

    return (
        <div className="register-page">
            {(inputIsCorrect != true) ? (
                <div className='container'>
                    <div className='register-box'>
                        <div>
                            <h2 className='title'>Create Account</h2>
                        </div>
                        <form className='form-box'>
                            <div className='name'>
                                <label className='label'>Name</label>
                                <input className='input' type='text' name='name' value={values.name} onChange={HandleChange}/>
                                {errors.name && <p className='error'>{errors.name}</p>}
                            </div>
                            <div className='email'>
                                <label className='label'>Email</label>
                                <input className='input' type='email' name='email' value={values.email} onChange={HandleChange}/>
                                {errors.email && <p className='error'>{errors.email}</p>}
                            </div>
                            <div className='password'>
                                <label className='label'>Password</label>
                                <input className='input' type='password' name='password' value={values.password} onChange={HandleChange}/>
                                {errors.password && <p className='error'>{errors.password}</p>}
                            </div>
                            <div>
                                <button className='register register-btn' onClick={register}>Register</button>
                                <a className='link2' href="/login">Already have an account?</a>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className='register-box'>
                        <h1 className='form-success'>Account Created!</h1>
                        <button className='register login-btn3' onClick={event =>  window.location.href='/login'}>Login</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RegisterForm;

/*
required  pattern="[A-Za-z]{1, 9}"
required pattern="[/^[^\s@]+@[^\s@]+\.[^\s@]+$/]{5, 20}"
required pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"

const HandleRegister = (event) => {
        event.preventDefault();
        setErrors(RegisterValidation(values));
        setInputIsCorrect(true);
        setFormIsRegistered(true);
    };

console.log(response);
setInputIsCorrect(true);
setFormIsRegistered(true);

const [formIsRegistered, setFormIsRegistered] = useState(Boolean);

const TestingForm = (e) => {
    e.preventDefault();
    setErrors(RegisterValidation(values));
    if(Object.keys(errors).length === 0 && values.name !="", values.email !="", values.password !=""){
        setInputIsCorrect(true)
        console.log("input is correct, and accepted!")
    }
    else{
        setInputIsCorrect(false)
        console.log("fill in missing information!")
    }
} 

<button className='register register-btn' onClick={TestingForm}>test</button>
*/
