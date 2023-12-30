"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";


const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const { status } = useSession();

  useEffect(() => {
    const checkViewportWidth = () => {
      const mobileViewWidth = 640; // Define your mobile view width here
      setIsMobileView(window.innerWidth < mobileViewWidth);
    };

    checkViewportWidth();

    const handleResize = () => {
      checkViewportWidth();
      if (!isMobileView && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView, open]);

  
  return (
    <>
      {status === "unauthenticated" ? (
        
        <Link href="/login" className={styles.link}>
          <button className={styles.button}>
          Login
          </button>
        </Link>
   
      ) : (
        <div className={styles.container}>
      
          <Link href="/write" className={styles.link}>
          <Image src='/edit.png'  width={20} height={20} className={styles.imglink}/>
           Write
          </Link>
          
          <span className={styles.link} onClick={signOut} >
          <button className={styles.button}>
            Logout
            </button>
          </span>
          
        </div>
      )}
       <div className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
  <div className={`${styles.responsiveMenu} ${open ? styles.open : ''}`}>
    {status === 'authenticated' ? (
      <>
        <Link href="/write">Write</Link>
        <Link href="/" onClick={signOut}>Logout</Link>
      </>
    ) : (
      <Link href="/login">Login</Link>
    )}
  </div>
)}
    </>
  );
};

export default AuthLinks;