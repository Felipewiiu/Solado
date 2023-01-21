import React from 'react'
import Cards from './cards'
import styles from './galeria.module.css'
import produto from '../galeria/produto.json'


export default function Galeria() {
  return (
    <div className={styles.container}>
      {produto.map(item => {
        return(
          <Cards produto={item}/>

        )
        

      })}
    </div>
  )
}
