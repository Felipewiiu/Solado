import React from 'react'
import ItemDeLista from '../itemDeLista'
import styles from './aside.module.css'
export default function Aside() {
    return (
        <aside className={styles.container}>
            <ul>
                <ItemDeLista nome={"Mais caro"} />
                <ItemDeLista nome={"Mais barato"} />
                <ItemDeLista nome={"Marca"} />
                <ItemDeLista nome={"Preço"} />
            </ul>
        </aside>
    )
}
