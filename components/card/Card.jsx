import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"


const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
       
        <div className={styles.textContainer}>
        
        <Link href={`/posts/${item.slug}`}>
      
        <h2> 
            {item.title}
        </h2>

        </Link  >
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,200) }}/>
        <div className={styles.detail}>
        <span className={styles.category}>{item.catSlug}</span>
            <span className={styles.date}>{item.createdAt.substring(0,10)} </span>
            
            <Link href={`/posts/${item.slug}`} className={styles.link}>
              
              <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5
             32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5
              12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
         </Link>
        </div>

        
  </div>
  {item.img && (
        <div className={styles.imageContainer}> 
            <Image src={item.img} alt="" fill className={styles.image} />
        </div>
        )}
</div>
  )
}

export default Card