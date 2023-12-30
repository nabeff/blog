import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle"

const Navbar = () => {
  return (
    <div className={`${styles.container} ${styles.sticky}`}>
   
      <div className={styles.logo}>
      <div className={styles.flex}>
      <span className={styles.imgcontain}><Link href="/">JJ</Link></span><span className={styles.size}><Link href="/">JourneyJot</Link></span>
      </div>
   
        </div>
      
      <div className={styles.links}>
       
        <AuthLinks />
      </div>
      </div>
  
  );
};

export default Navbar;