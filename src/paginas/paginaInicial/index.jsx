import React from 'react'
import { useState } from 'react'
import Aside from '../../componentes/aside'
import Cabecalho from '../../componentes/cabecalho'
import Galeria from '../../componentes/galeria'
import styles from './paginaInicial.module.css'
import produto from '../../componentes/galeria/produto.json'


export default function Main({estilo}) {

  const [cards, setCards] = useState(produto)
  console.log(cards)
  // const filtroMaiorPreco = cards.sort((a,b) => parseInt(a.preco) - parseInt(b.preco))
  function ordenarListaPorTags(tag) {
    
    switch(tag.tag){
      case 'Maior preço':

        const filtroMaiorPreco = produto.sort((a,b) => parseInt(b.preco) - parseInt(a.preco))
        setCards([...filtroMaiorPreco])
        break;

      case 'Menor preço':
        const filtroMenorPreco = produto.sort((a,b) => parseInt(a.preco) - parseInt(b.preco))
        setCards([...filtroMenorPreco])
        break;

      case 'Modelo Masculino':
        const modelo = produto.filter(produto => produto.modelo === "Masculino" )
        setCards([...modelo])
        break;

      case 'Modelo Feminino':
        const modeloFeminino = produto.filter(produto => produto.modelo === "Feminino" )
        setCards([...modeloFeminino])
        break;

      case 'Lançamento':
        const lancamento = produto.filter(produto => produto.lancamento === "Lançamento" )
        setCards([...lancamento])
        break;

       default:

       break



    }
    
}


  
  
  return (
    <div className={estilo}>
        <Cabecalho/>

      <main className={styles.principal}>
          <Aside  ordenar={ordenarListaPorTags}/>
          <Galeria card={cards} />
        
      </main>
      
    </div>
  )
}
