import styles from "./style.module.css"

interface Props {
    component:number;
    setComponent:any;
}

export const ComponentNavigator = ({component, setComponent}:Props) => {

    function handleCount(sum:number) {
        if (component === 0 && sum===-1) return;
        if (component===100 && sum===1) return;
        setComponent((count:number) => count+sum)
        }

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={() => handleCount(-1)}>Previous Component</div>
            <div className={styles.button} onClick={() => handleCount(+1)}>Next Component</div>
        </div>
    )
  };