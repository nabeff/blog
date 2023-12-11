import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" fill className={styles.avatar}/>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>01.02.2024</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus, libero eos quisquam tempora id eveniet minus.
                     Magnam at illo ea, 
                    aliquam maxime corrupti animi modi,
                     magni nisi unde harum doloribus necessitatibus 
                     sed voluptas voluptatum ipsa aut obcaecati! Atque, nostrum in?
                </p>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus, libero eos quisquam tempora id eveniet minus.
                     Magnam at illo ea, 
                    aliquam maxime corrupti animi modi,
                     magni nisi unde harum doloribus necessitatibus 
                     sed voluptas voluptatum ipsa aut obcaecati! Atque, nostrum in?
                </p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus, libero eos quisquam tempora id eveniet minus.
                     Magnam at illo ea, 
                    aliquam maxime corrupti animi modi,
                     magni nisi unde harum doloribus necessitatibus 
                     sed voluptas voluptatum ipsa aut obcaecati! Atque, nostrum in?
                </p>
                </div>

                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu />
      </div>
  </div>
  )
}

export default SinglePage