import styles from "./style.module.css"
import { SimpleForm } from "../SimpleForm";
import { Foot } from "../Foot"
import { LikeDislikeComponent } from "../LikeDislikeComponent"

interface Props {
    component:number;
}

export const ComponentViewer = ({component}:Props) => {

    function dummy_function() {
        return;
    }



    if (component===0) return <div><h1 >Foot</h1><Foot/></div>
    else if (component===1) return <div><h1 >Simple Form</h1><SimpleForm onSubmit={dummy_function} 
                                                                         inputs={[{title:"Input 1", name:"input_1"},{title:"Input 2", name:"input_2"}]}/></div>
    else if (component===2) return <div><h1 >Like/Dislike</h1><LikeDislikeComponent handle_like={dummy_function} handle_dislike={dummy_function}/></div>
    else return <div>No Component</div>

  };