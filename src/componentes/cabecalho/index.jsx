import React from 'react'
import ItemDeLista from '../itemDeLista'
import styles from './cabecalho.module.css'
import lupa from './lupa.png'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <h1>Solado</h1>
        <div className={styles.pesquisa}>
            <img src={lupa} alt="imagem de pesquisa"  className={styles.icone}/>
            <input type="text" name="" id="" className={styles.input} />
        </div>
        <ul className={styles.lista_menu}>
            <ItemDeLista nome={"Lista de desejo"}/>
            <ItemDeLista nome={"Entrar"}/>
            
        </ul>
    </header>
  )
}
