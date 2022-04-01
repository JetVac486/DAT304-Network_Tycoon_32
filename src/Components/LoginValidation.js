import adminUser from "../pages/Login";

const LoginValidation = (values) => {
    
    let errors={};
    
    if(values.name == ""){
        errors.name='Please enter a name.'
    }
    if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    else if(values.email !== "admin@admin.com"){
        errors.email='Email does not match!'
    }
    if(values.password !== "admin123"){
        errors.password='Password does not match!'
    }    

    return errors;
};

export default LoginValidation;

/*Kilde: https://techfunda.com/howto/729/not-equal-operator */