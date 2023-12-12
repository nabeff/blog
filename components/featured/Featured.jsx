import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      Unlock<b> the Magic </b>  in Your Story Now
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/food.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Create a blog
worth sharing</h1>
          <p className={styles.postDesc}>
          Share your story with the world. Stand out with a 
          professionally-designed blog website that can be 
          customized to fit your brand. Build, manage, and promote your blog with Squarespace’s built-in suite of design and marketing tools.
          </p>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;