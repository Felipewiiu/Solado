import React from 'react'
import styles from './aside.module.css'
import filtro from './filtro.json'


export default function Aside({maiorPreco}) {



    return (
        <aside className={styles.container}>
            <ul>
                {filtro.map(tag => {
                    return (
                        <li className={styles.item} key={tag.id} onClick={() => maiorPreco(tag)}>
                            {tag.tag}
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
