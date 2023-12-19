import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/nabil-effina-BW.jpeg" alt="nabil effina" width={50} height={50} className={styles.radius}/>
          <h1 className={styles.logoText}>Effina Nabil</h1>
        </div>
        <p className={styles.desc}>
        Give that arrow a tap on any story to read or comment. And once you're in, get ready to write and sprinkle your thoughts like confetti. Let's join the fun!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
    
    </div>
  );
};

export default Footer;