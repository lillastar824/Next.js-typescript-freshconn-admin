export default function FormValidator(props: any) {
    let errors = {
        name: "",
        address: "",
        open: "",
        close: "",
        image: ""
    };
    let cond = true;
    //add market
    if (!props.name) {
        errors.name = 'Market Name is required';
        cond = false;
    }
    if (!props.address) {
        errors.address = 'Adress is required';
        cond = false;
    }
    if (!props.open) {
        errors.open = 'Open Time is required';
        cond = false;
    }
    if (!props.close) {
        errors.close = 'Close Time is required';
        cond = false;
    }
    if (!props.image) {
        errors.image = 'Image is required';
        cond = false;
    }
    return { errors, cond };
};