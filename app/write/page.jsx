"use client"

import { useState } from "react"
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const WritePage = () => {

    

    const [open, setOpen] = useState(true);
    const [value, setValue] = useState("");

    const {status} = useSession()
    const router = useRouter()

    if(status === "loading"){
     return <div className={styles.loading}>Loading ...</div>
    }

    if(status === "authenticated"){
    router.push("/")
    }


  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input}/>
        <div className={styles.editor}>
            <button className={styles.addButton} onClick={() => setOpen}>
                <Image src="/plus.png" alt="" width={16} height={16}/>
            </button>
            {
                open && (
                    <div className={styles.add}>

                       <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16}/>                            
                        </button> 

                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>   

                        <button className={styles.addButton}>
                             <Image src="/video.png" alt="" width={16} height={16} />
                        </button>   

                    </div>
                )
            }
            <ReactQuill className={styles.textArea} theme="bubble" onChange={setValue} placeholder="Tell your stories"/>
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage