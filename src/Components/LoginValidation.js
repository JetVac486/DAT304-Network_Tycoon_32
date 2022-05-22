const LoginValidation = (values) => {
    
    let errors={};
    
    if(values.name == ""){
        errors.name='Please enter a name.'
    }
    else if(!/^[a-zA-Z0-9]{4,12}$/.test(values.name)){
        errors.name='name is not valid'
    }

    if(values.email == ""){
        errors.email="Please enter an email."
    }
    else if(!/^\w{3,9}@\w{3,9}\.\w{2,4}$/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if(values.password == ""){
        errors.password='Please enter a password.'
    }
    else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,16}$/.test(values.password)){
        errors.password="Password is invalid!"
    }    

    return errors;
};

export default LoginValidation;

/*Kilde: https://techfunda.com/howto/729/not-equal-operator 
/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
*/