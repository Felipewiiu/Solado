import React from 'react'
import styles from './cards.module.css'

export default function Cards({ produto }) {
  return (
    <div className={styles.cardContainer}>
      <img src={produto.path} alt="" className={styles.img} />
      <div className={styles.containerDescricao} >
        <p>⭐⭐⭐⭐⭐</p>
        <p>{produto.modelo}</p>
        <p className={styles.frete}>{`${produto.frete}`}</p>
        <p className={styles.preco}>{`R$ ${produto.preco}`}</p>
        <p><span  className={styles.desconto}>{`${produto.desconto}`}</span> no <span className={styles.desconto}>pix</span></p>
        <p>{`ou ${produto.parcela}x de R$ ${(parseInt(produto.preco) / produto.parcela).toFixed(2)}`}</p>
      </div>
    </div>
  )
}
