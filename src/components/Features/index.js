import React from 'react'
import uuid from 'uuid'

import styles from './features.module.scss'

import cover from '../../images/cover.jpg'

function Features() {
    const features = [
        {
            id: uuid(),
            cover,
            heading: 'Blurb1',
            text: 'lorem ipsum some text'
        },
        {
            id: uuid(),
            cover,
            heading: 'Blurb 2',
            text: 'lorem ipsum some text'
        },
        {
            id: uuid(),
            cover,
            heading: 'Blurb 3',
            text: 'lorem ipsum some text'
        },
        {
            id: uuid(),
            cover,
            heading: 'Blurb 4',
            text: 'lorem ipsum some text'
        }
    ]
    
    return (
        <section className={ styles.features }>
            <header>
                <h2 className={ styles.title }>Features</h2>
            </header>
            <div className={ styles.container }>
                {
                    features.map(feature => (
                        <article className={ styles.feature } key={ feature.id }>
                            <figure className={ styles.figure }>
                                <img src={ feature.cover } className={ styles.image }></img>
                            </figure>
                            <header className={ styles.header }>
                                <h3 className={ styles.heading }>{ feature.heading }</h3>
                            </header>
                            <p className={ styles.text }>{ feature.text }</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Features