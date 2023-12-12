import Image from 'next/image'
import Link from 'next/link'
import styles from "./menuPosts.module.css"

const MenuPosts = ({widthImage}) => {
  return (
    <div className={styles.items}>
        <Link  href="/" className={styles.item}>
          {widthImage && ( <div className={styles.imageContainer}>
              <Image src='/fashion.png' alt='' fill className={styles.image}/>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
              </span>
            <h3 className={styles.postTitle}>Discovering new places broadens your horizons beautifully.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Spirit - </span>
                <span className={styles.date}>12.12.2023</span>
              </div>
          </div>
        </Link>
        <Link  href="/" className={styles.item}>
        {widthImage && ( <div className={styles.imageContainer}>
              <Image src='/coding.png' alt='' fill className={styles.image}/>
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
              </span>
            <h3 className={styles.postTitle}>
            Culture intertwines stories, beliefs, and traditions gracefully.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Obama - </span>
                <span className={styles.date}>06.04.2014</span>
              </div>
          </div>
        </Link>
        <Link  href="/" className={styles.item}>
        {widthImage && ( <div className={styles.imageContainer}>
              <Image src='/travel.png' alt='' fill className={styles.image}/>
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
              </span>
            <h3 className={styles.postTitle}>
            Food connects cultures through delicious shared experiences.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Ramsey - </span>
                <span className={styles.date}>08.08.2022</span>
              </div>
          </div>
        </Link>
        <Link  href="/" className={styles.item}>
        {widthImage && ( <div className={styles.imageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
              </span>
            <h3 className={styles.postTitle}>            
            Fashion expresses identity through style and creativity.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Balenciaga - </span>
                <span className={styles.date}>10.09.2023</span>
              </div>
          </div>
        </Link>
      </div>
    
  )
}

export default MenuPosts