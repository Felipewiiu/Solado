import React from 'react'
import styles from './cards.module.css'

export default function Cards({produto}) {
  return (
    <div className={styles.cardContainer}>
        <img src={produto.path} alt="" />
    </div>
  )
}
