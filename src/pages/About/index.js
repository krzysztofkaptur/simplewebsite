import React from 'react'

import cover from '../../images/cover.jpg'

import styles from './about.module.scss'

function About() {
    return (
        <section className={ styles.about }>
            <div className={ styles.container }>
                <header>
                    <h2 className={ styles.title }>About</h2>
                </header>
                <section className={ styles.section }>
                    <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <figure className={ styles.figure }>
                        <img src={ cover }></img>
                    </figure>
                </section>
                <section className={ styles.section }>
                    <figure className={ styles.figure }>
                        <img src={ cover }></img>
                    </figure>
                    <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section className={ styles.section }>
                    <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <figure className={ styles.figure }>
                        <img src={ cover }></img>
                    </figure>
                </section>
            </div>
        </section>
    )
}

export default About