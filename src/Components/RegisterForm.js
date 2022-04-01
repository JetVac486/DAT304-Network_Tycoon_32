import React, {useEffect, useState} from 'react';
import setFormIsRegistered from './Form';
import RegisterValidation from './RegisterValidation';

const RegisterForm = ({signupForm}) => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({});
    const [inputIsCorrect, setInputIsCorrect] = useState(false);

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
        var sql ='INSERT INTO Users (Username, Email, Password) VALUES (?,?,?)'
        var params =[values.name, values.email, values.password]
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
                        <button className='register register-btn' onClick={HandleRegister}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;