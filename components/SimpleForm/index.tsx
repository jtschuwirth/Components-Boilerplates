import { FormEventHandler } from "react";
import styles from "./style.module.css"

interface Props {
    onSubmit:FormEventHandler;
}

export const SimpleForm = ({onSubmit}:Props) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputs}>
                <div className={styles.input_container}>
                    <input className={styles.input} name="input_1" type="text" required/>
                    <label className={styles.label}>Input 1</label>
                </div>
                <div className={styles.input_container}>
                    <input className={styles.input} name="input_2" type="text" required/>
                    <label className={styles.label}>Input 2</label>
                </div>
            </div>
            <button className={styles.btn} type="submit">Submit</button>
        </form>
    );
  };