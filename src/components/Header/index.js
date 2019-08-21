import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

function Header() {
    return (
        <header className={ styles.header }>
            <div className={ styles.container }>
                <div>
                    <h2 className={ styles.header_logo }>SimpleWebsite</h2>
                </div>
                <nav className={ styles.nav }>
                    <Link to='/' className={ styles.nav_link }>Home</Link>
                    <Link to='/about' className={ styles.nav_link }>About</Link>
                    <Link to='/contact' className={ styles.nav_link }>Contact</Link>
                </nav>
            </div>  
        </header>
    )
}

export default Header