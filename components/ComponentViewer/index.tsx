import styles from "./style.module.css"
import { SimpleForm } from "../SimpleForm";
import { Foot } from "../Foot"

interface Props {
    component:number;
}

export const ComponentViewer = ({component}:Props) => {

    function onSubmit() {
        return;
    }
    if (component===0) return <div><h1 >Foot</h1><Foot/></div>
    else if (component===1) return <div><h1 >Simple Form</h1><SimpleForm onSubmit={onSubmit}/></div>
    else return <div>No Component</div>

  };