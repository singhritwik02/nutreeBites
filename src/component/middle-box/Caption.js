import React from 'react'
import styles from './Caption.module.css'
import img1 from '../../assets/img1.jpg'; 
import img2 from '../../assets/img2.jpg'; 
import img3 from '../../assets/img3.jpg'; 
import img4 from '../../assets/img4.jpg'; 
function Caption() {
  return (
    <div className={styles.container}>
        <img src={img2} className={`${styles.img} ${styles.img1}`} alt='img'/>
        <img src={img1} className={`${styles.img} ${styles.img2}`} alt='img'/>
        <img src={img3} className={`${styles.img} ${styles.img3}`} alt='img'/>
        <img src={img4} className={`${styles.img} ${styles.img4}`} alt='img'/>
        <h1 className={styles.heading}>Every bite is healthy bite....</h1>
    </div>
  )
}

export default Caption