import styles from "./homepage.module.css";
import Featured from './../components/featured/Featured';
import CategoryList from './../components/CategoryList/CategoryList';
import CardList from "./../components/CardList/CardList"
import Menu from "./../components/Menu/Menu"


export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;
  return <div className={styles.container}>
    
    <div className={styles.content}>
      <CardList page={page} cat={undefined}/>
      
          <Menu />
       
    </div>
    </div>;
}
