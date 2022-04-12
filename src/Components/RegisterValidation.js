const RegisterValidation = (values) => {
    
    let errors={};
    
    if(values.name == ""){
        errors.name='Please enter a name.'
    }
    else if(!/^(?=.*?[A-Z]).{2,4}$/.test(values.name)){
        errors.name='name is not valid'
    }

    if(values.email == ""){
        errors.email="Please enter an email."
    }
    else if(!/^\w{3,6}@\w{3,6}\.\w{2,3}$/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if(values.password == ""){
        errors.password='Please enter a password.'
    }
    else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,12}$/.test(values.password)){
        errors.password="Password is invalid!"
    }

    return errors;
};

export default RegisterValidation;