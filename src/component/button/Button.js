import React from 'react'
import styles from './Button.module.css'

function Button({children , isCardBtn,onClick}) {
  return (
    <button type='button' onClick={onClick} className={` ${isCardBtn ?styles.btn2:styles.btn} `}>{children}</button>
  )
}

export default Button