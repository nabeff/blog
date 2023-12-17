"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";


const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const {status} = useSession();

  
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={styles.container}>
      
          <Link href="/write" className={styles.link}>
          <Image src='/edit.png'  width={20} height={20} className={styles.imglink}/>
           Write
          </Link>
          
          <span className={styles.link} onClick={signOut} >
            Logout
          </span>
          
        </div>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write" >Write</Link>
              <Link href="/" onClick={signOut} >Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;