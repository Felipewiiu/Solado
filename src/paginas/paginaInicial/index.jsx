import React from 'react'
import { useState } from 'react'
import Aside from '../../componentes/aside'
import Cabecalho from '../../componentes/cabecalho'
import Galeria from '../../componentes/galeria'
import styles from './paginaInicial.module.css'
import produto from '../../componentes/galeria/produto.json'


export default function Main({estilo}) {

  const [cards, setCards] = useState(produto)
  


  function maiorPreco(tag) {

    const filtroMaiorPreco = produto.sort((a,b) => parseInt(a.preco) - parseInt(b.preco))
    
    
    return (
        tag.tag === 'Maior preço' ? setCards(filtroMaiorPreco)  : ''
    )
    
}


  
  
  return (
    <div className={estilo}>
        <Cabecalho/>

      <main className={styles.principal}>
          <Aside  maiorPreco={maiorPreco}/>
          <Galeria card={cards} />
        
      </main>
      
    </div>
  )
}
