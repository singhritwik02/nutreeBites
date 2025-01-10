import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
function NotFound() {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>no item added</h1>
        <Link to='/' className={styles.btn}>Go Back</Link>
    </div>
  )
}

export default NotFound