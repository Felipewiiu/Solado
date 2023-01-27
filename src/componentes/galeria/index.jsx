import React from 'react'
import Cards from './cards'
import styles from './galeria.module.css'
// import produto from '../galeria/produto.json'


export default function Galeria({card}) {



  return (
    <div className={styles.container}>
      {card.map(item => {
            
        return(
          <Cards produto={item} key={item.id}/>
          )
          

      })}

      
    </div>

    
  )
}
