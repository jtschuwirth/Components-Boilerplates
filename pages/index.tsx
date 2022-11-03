import styles from '../styles/Home.module.css'
import { ComponentNavigator } from '../components/ComponentNavigator'
import { ComponentViewer } from '../components/ComponentViewer'
import { useState } from "react"

export default function Home() {
  const [component, setComponent] = useState(0)

  return (
    <div className={styles.main}>
      <ComponentViewer component={component}/>
      <ComponentNavigator component={component} setComponent={setComponent}/>
    </div>
  )
}
