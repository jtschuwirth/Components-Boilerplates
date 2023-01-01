import styles from "./style.module.css"

export const Slider = () => {

    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
  };