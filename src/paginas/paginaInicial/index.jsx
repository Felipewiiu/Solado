import React from 'react'
import Aside from '../../componentes/aside'
import Cabecalho from '../../componentes/cabecalho'
import Galeria from '../../componentes/galeria'
import styles from './paginaInicial.module.css'

export default function Main({estilo}) {
  
  return (
    <body className={estilo}>
        <Cabecalho/>

      <main className={styles.principal}>
          <Aside/>
          <Galeria/>
      </main>
      
    </body>
  )
}
