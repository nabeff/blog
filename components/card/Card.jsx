import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

function readingTime(text) {
  const wpm = 225; // Assuming average reading speed
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

const Card = ({key, item}) => {

  const estimatedTime = readingTime(item?.desc);
  return (
    <div className={styles.container} key={key}>
       
        <div className={styles.textContainer}>
        
        <Link href={`/posts/${item.slug}`}>
      
        <h3 className={styles.title}> 
            {item.title}
        </h3>

        </Link  >
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,200) }} />
        
        <div className={styles.detail}>
        <span className={styles.category}>{item.catSlug}</span>
            <span className={styles.date}>{item.createdAt.substring(0,10)} </span>
          
            <span className={styles.readingTime}>
            {estimatedTime} min read .
          </span>          
            <Link href={`/posts/${item.slug}`} className={styles.link}>              
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