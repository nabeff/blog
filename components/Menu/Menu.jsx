import React from 'react'
import styles from "./menu.module.css"

import MenuCategories from '../menuCategories/MenuCategories';
import MenuPosts from './../menuPosts/MenuPosts';


function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"what's hot"}</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts widthImage={false}/>

      <h2 className={styles.subtitle}>Discover By Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>

      <h2 className={styles.subtitle}>chosen by the editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts widthImage={true}/>

    </div>
  )
}

export default Menu