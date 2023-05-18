import { BsGoogle } from "react-icons/bs";
import './button.styles.scss';
const button_type_classes = {
    google: 'google-sign_in_btn',
    inverted: 'inverted'
};

const Button = ({ buttonTitle, buttonType, ...otherProps }) => {
    return <button className={button_type_classes[buttonType]} {...otherProps}>{buttonType === 'google' ? <BsGoogle /> : ''}{buttonTitle}</button>;
};

export default Button;