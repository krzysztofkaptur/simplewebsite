import React from 'react'
import uuid from 'uuid'

import Card from '../Card/'

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
                        <Card feature={ feature } />
                    ))
                }
            </div>
        </section>
    )
}

export default Features