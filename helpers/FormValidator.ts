export default function FormValidator(props: any) {
    let errors = {
        email: "",
        password: "",
    };
    let cond = true;
    //login form 
    if (!props.email) {
        errors.email = 'Email address is required';
        cond = false;
    } else if (!/\S+@\S+\.\S+/.test(props.email)) {
        errors.email = 'Email address is invalid';
        cond = false;
    }
    if (!props.pass) {
        errors.password = 'Password is required';
        cond = false;
    } else if (props.pass.length < 8) {
        errors.password = 'Password must be 8 or more characters';
        cond = false;
    }
    return { errors, cond };
};