import React from 'react'

import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <div className={ styles.container }>
                <p className={ styles.copyright }>&copy; Copyright SimpleWebsite 2019</p>
                <section className={ styles.policy }>
                    <a href="" className={ styles.link }>Cookies</a>
                    <a href="" className={ styles.link }>Privacy</a>
                </section>
            </div>
        </footer>
    )
}