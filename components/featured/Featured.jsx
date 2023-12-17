import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.insideContainer}>

        <div className={styles.titre}><Image src='/high-quality.png'  width={20} height={20} className={styles.imglink}/><h2>Trending on JJ</h2></div>

         <div className={styles.grid}>

           
          <div className={styles.flex}> 

            <div className={styles.insideFlex}>
                <div className={styles.number}>01</div>
                
            
            <div className={styles.info}>
                  <div className={styles.title}>Towards AI Advancements</div>
                  <div>
                    <p className={styles.desc}>Exploring Machine Learning Algorithms</p>
                    <p className={styles.date}>Dec 17</p>
                  </div>
                </div>
                </div>
          </div>

           <div className={styles.flex}> 

            <div className={styles.insideFlex}>
                <div className={styles.number}>02</div>
                
            
            <div className={styles.info}>
                  <div className={styles.title}>Renewable Energy Innovations</div>
                  <div>
                    <p className={styles.desc}>Assessing Solar vs. Wind Power Generation</p>
                    <p className={styles.date}>Aug 21</p>
                  </div>
                </div>
                </div>
        </div>

           <div className={styles.flex}> 

            <div className={styles.insideFlex}>
                <div className={styles.number}>03</div>
                
            
            <div className={styles.info}>
                  <div className={styles.title}>The Future of Space Exploration</div>
                  <div>
                    <p className={styles.desc}>Challenges and Opportunities in Colonizing Mars</p>
                    <p className={styles.date}>jan 08</p>
                  </div>
                </div>
                </div>
        </div>

            <div className={styles.flex}> 

            <div className={styles.insideFlex}>
                <div className={styles.number}>04</div>
                
            
            <div className={styles.info}>
                  <div className={styles.title}>The Evolution of Biomedical Technology</div>
                  <div>
                    <p className={styles.desc}>Revolutionizing Healthcare through Wearable Devices</p>
                    <p className={styles.date}>july 26</p>
                  </div>
                </div>
                </div>
        </div>

         </div>

      </div>
    </div>
  );
};

export default Featured;