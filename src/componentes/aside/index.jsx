import React from 'react'
import styles from './aside.module.css'
import filtro from './filtro.json'


export default function Aside({ordenar}) {

    return (
        <aside className={styles.container}>
            <ul>
                {filtro.map(tag => {
                    return (
                        <li className={styles.item} key={tag.id} onClick={() => ordenar(tag)}>
                            {tag.tag}
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
