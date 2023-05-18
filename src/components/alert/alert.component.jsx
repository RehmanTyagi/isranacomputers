import Alert from '@mui/material/Alert';
import useAlert from "../../hooks/alert-custom-hook/alert.hook";

const AlertPopup = (props) => {
    const { text, type } = useAlert();

    if (text && type) {
        return (
            <Alert className={props.className}
                severity={type}
                sx={{
                    position: 'fixed',
                    boxShadow: '0px 0px 10px lightgray',
                    top: '0',
                    width: '100%',
                    zIndex: 1200
                }}
            >
                {text}
            </Alert>
        );
    } else {
        return <div></div>;
    }

};

export default AlertPopup;