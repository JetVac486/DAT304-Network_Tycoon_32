import React, {useEffect, useState} from 'react';
import setFormIsRegistered from './Form';
import RegisterValidation from './RegisterValidation';
import Axios from 'axios';


const RegisterForm = ({signupForm}) => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({});
    const [inputIsCorrect, setInputIsCorrect] = useState(false);

    const register = (e) => {
        e.preventDefault();
        setErrors(RegisterValidation(values));
        Axios.post('http://localhost:3001/register', {
            username: values.name, 
            email: values.email, 
            password: values.password
        })
        .then((response) => {
            console.log(response);
            setInputIsCorrect(true);
            setFormIsRegistered(true);   
        });
        console.log("User created!")
    }


    const HandleChange = (event) =>{
        setValues({
            ...values, 
            [event.target.name]: event.target.value,
        });
    };

    const HandleRegister = (event) => {
        event.preventDefault();
        setErrors(RegisterValidation(values));
        setInputIsCorrect(true);
        setFormIsRegistered(true);
    };


    useEffect(() => {
        if(Object.keys(errors).length === 0 && inputIsCorrect){
            console.log(values); 
            signupForm(true)       
        }
    }, [errors]);

    return (
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;

/*
required  pattern="[A-Za-z]{1, 9}"
required pattern="[/^[^\s@]+@[^\s@]+\.[^\s@]+$/]{5, 20}"
required pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
*/