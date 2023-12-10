import { useState } from "react"
import styles from "./write.module.css"

const WritePage = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title"/>
    </div>
  )
}

export default WritePage