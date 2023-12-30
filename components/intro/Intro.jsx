"use client"

import React from 'react'
import styles from "./intro.module.css"
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function Intro() {

    const { status } = useSession();

  if (status === "authenticated") {
    return null; 
  }

  return (
    <div className={styles.container}>
        <div className={styles.flex}>
            <h1 className={styles.title}>
            Stay curious.
            </h1>
            <p className={styles.desc}>Discover stories, thinking, and expertise from writers on any topic.</p>
            <button className={styles.button}>
            <Link href="/login" className={styles.link}>
            Start reading
        </Link>
            </button>
        </div>
        
        </div>
  )
}

export default Intro