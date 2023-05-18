import { useContext } from "react";
import { AlertContext } from "../../context/popup.context";


const useAlert = () => useContext(AlertContext);


export default useAlert;