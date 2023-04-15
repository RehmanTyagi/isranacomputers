import './formInput.styles.scss'
const FormInput = ({ label, inputoptions }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input
                {...inputoptions}
            />
        </div>
    )
}

export default FormInput;