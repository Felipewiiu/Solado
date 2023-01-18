import React from 'react'
import styles from './cabecalho.module.css'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <h1>Solado</h1>
        <div>
            <img src="" alt="" />
            <input type="text" name="" id="" />
        </div>
        <ul>
            <li>Lista de desejo</li>
            <li>entrar</li>
        </ul>
    </header>
  )
}
