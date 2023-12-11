"use client"

import { useState } from "react"
import styles from "./write.module.css";
import Image  from 'next/image';
import reactQuill from "react-quill";
import "react-quill/dist/react-quill.css"

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(false)

  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input}/>
        <div className={styles.editor}>
            <button className={styles.addButton} onClick={() => setOpen}>
                <Image src="/plus.png" alt="" width={16} heigh={16}/>
            </button>
            {
                open && (
                    <div className={styles.add}>
                       <button className={styles.addButton}>
                            <Image src="/plus.png" alt="" width={16} heigh={16}/>
                        </button> 
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} heigh={16}/>
                        </button>   
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} heigh={16}/>
                        </button>       
                    </div>
                )
            }
            <reactQuill className={styles.textArea} theme="bubble" onChange={setValue} placeholder="Tell your stories"/>
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage