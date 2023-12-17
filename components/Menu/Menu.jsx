import React from 'react'
import styles from "./menu.module.css"

import MenuCategories from '../menuCategories/MenuCategories';
import MenuPosts from './../menuPosts/MenuPosts';
import Footer from '../footer/Footer';


function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.by}>
        <div className={styles.et}>
     
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts widthImage={false}/>

      
      <h1 className={styles.title}>Recommended topics</h1>
      <MenuCategories/>

     
      <h1 className={styles.title}>Staff Pick</h1>
      <div className={styles.menuContainer}>
      <MenuPosts widthImage={true}/>
      <Footer />
      
      </div>
    </div>
    </div>
   
    </div>
  )
}

export default Menu

