const LoginValidation = (values) => {
    
    let errors={};
    
    if(values.name == ""){
        errors.name='Please enter a name.'
    }
    if(values.email == ""){
        errors.email="Please enter an email."
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if(values.password == ""){
        errors.password='Please enter a password.'
    }    

    return errors;
};

export default LoginValidation;

/*Kilde: https://techfunda.com/howto/729/not-equal-operator */