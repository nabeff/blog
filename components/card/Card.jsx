import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

function readingTime(text) {
  const wpm = 225; // Assuming average reading speed
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

function getTimeDifference(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const difference = currentDate.getTime() - createdDate.getTime();
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else {
    return `${daysDifference} days ago`;
  }
}

const Card = ({key, item}) => {

  const timeSinceCreation = getTimeDifference(item.createdAt);
  const estimatedTime = readingTime(item?.desc);
  return (
    <div className={styles.container} key={key}>
       
        <div className={styles.textContainer}>
        
        <Link href={`/posts/${item.slug}`}>
        <span className={styles.date}> {timeSinceCreation}</span>
        <h3 className={styles.title}> 
            {item.title}
            
        </h3>

        </Link  >
        <Link href={`/posts/${item.slug}`}>
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,200) }} />
        </Link  >
        <div className={styles.detail}>
        <span className={styles.category}>{item.catSlug}</span>
            
          
            <span className={styles.readingTime}>
            {estimatedTime} min read .
          </span>          
            <Link href={`/posts/${item.slug}`} className={styles.link}>              
         </Link>
        </div>

        
  </div>
  {item.img && (
      
        <div className={styles.imageContainer}> 
        <Link href={`/posts/${item.slug}`}>
            <Image src={item.img} alt="" fill className={styles.image} />
            </Link  >
        </div>
         
        )}
</div>
  )
}



export default Card