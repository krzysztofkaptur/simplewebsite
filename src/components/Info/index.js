import React from 'react'

import rickandmorty from '../../images/rickandmorty.jpg'

import styles from './info.module.scss'

function Info() {
    return (
        <section className={ styles.info }>
            <div className={ styles.container }>
                <figure className={ styles.figure }>
                    <img src={ rickandmorty } className={ styles.image }></img>
                </figure>
                <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
}

export default Info