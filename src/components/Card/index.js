import React from 'react'

import styles from './card.module.scss'

function Card({ feature }) {
    return (
        <article className={ styles.feature } key={ feature.id }>
            <figure className={ styles.figure }>
                <img src={ feature.cover } className={ styles.image }></img>
            </figure>
            <header className={ styles.header }>
                <h3 className={ styles.heading }>{ feature.heading }</h3>
            </header>
            <p className={ styles.text }>{ feature.text }</p>
        </article>
    )
}

export default Card