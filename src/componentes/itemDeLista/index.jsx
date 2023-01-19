import styles from './itenDeLista.module.css'

export default function ItemDeLista({nome}) {
  return (
    <li className={styles.item}>{nome}</li>
  )
}
