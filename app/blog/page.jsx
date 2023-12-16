import React from 'react'
import CardList from '../../components/CardList/CardList'
import Menu from '../../components/Menu/Menu'
import styles from "./blogPage.module.css"

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage