import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from "@/components/comments/Comments"





const getData = async (slug) => {

 

    const res = await fetch(
      `http://localhost:3000/api/posts/${slug}`,
      {
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

const SinglePage = async ({params}) => {

  function readingTime(text) {
    const wpm = 225; // Assuming average reading speed
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }
 
    const {slug} = params;
    const data = await getData(slug)
    const estimatedTime = readingTime(data?.desc);
  return (
    
  
    <div className={styles.container}>
     
    <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>
                {data?.title}
            </h1>
            <div className={styles.user}>
                {data?.user?.image &&
                    <div className={styles.userImageContainer}>
                    <Image src={data.user.image} fill className={styles.avatar}/>
                </div>
                }
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user.name}</span>
                    <div className={styles.gap}>
                    <span className={styles.date}>{data.createdAt.substring(0,10)}</span>
                    <span className={styles.readingTime}>
                       {estimatedTime} min read 
                      </span>
                      </div>
                </div>
            </div>
           
    {data?.img &&
      <div className={styles.imageContainer}>
          <Image src={data.img} fill className={styles.image}/>
      </div>
      }
      <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} 
                dangerouslySetInnerHTML={{ __html: data?.desc }}>
                
                </div>

                <div className={styles.comment}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            
      </div>
      
            
        </div>
        
                                                             
      </div>
      
      
  </div>
  
 
  )
}

export default SinglePage