import "./back-drop.styles.scss";
const BackDrop = (props) => {
    const { className, onToggle } = props;
    return <div onClick={onToggle} className={`${className} back-drop`}></div>;
};

export default BackDrop;