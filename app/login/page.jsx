"use client"

import styles from "./loginPage.module.css"
import { signIn, useSession } from 'next-auth/react'
import Image from "next/image"
import { useRouter } from "next/navigation"

const page = () => {

  const {data, status} = useSession()
  const router = useRouter()

  if(status === "loading"){
    return <div className={styles.loading}>Loading ...</div>
  }

  if(status === "authenticated"){
    router.push("/")
  }

  return (
    <div className={styles.container}>
      
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Join JourneyJot</h2>
      <div className={styles.socialButton} onClick={()=> signIn("google")}>  <Image src="/7611770.png" alt="" width={18} height={18} />Sign in with Google</div>
      <p className={styles.lightgray}>Click “Sign in” to agree to JourneyJot’s Terms of Service and acknowledge <br></br> that JourneyJot’s Privacy Policy applies to you.</p>
    </div>
  </div>
  )
}

export default page