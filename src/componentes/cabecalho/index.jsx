import React from 'react'
import styles from './cabecalho.module.css'
import lupa from './lupa.png'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <h1>Solado</h1>
        <div className={styles.pesquisa}>
            <img src={lupa} alt="imagem de pesquisa"  className={styles.icone}/>
            <input type="text" name="" id="" className={styles.input}  placeholder={"O que você está procurando?"}/>
        </div>
        <ul className={styles.lista_menu}>
          <li>Lista de desejos</li>
          <li>Entrar</li>
           
            
        </ul>
    </header>
  )
}
