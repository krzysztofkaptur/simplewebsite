import React, { Component } from 'react'

import styles from './contact.module.scss'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value 
        })
        console.log(this.state)
    }

    render() {
        return (
            <section className={ styles.contact }>
                <div className={ styles.container }>
                    <header>
                        <h2 className={ styles.title }>Contact me</h2>
                    </header>
                    <form className={ styles.form }>
                        <div className={ styles.group }>
                            <label htmlFor="name" className={ styles.label }>Name</label>
                            <input type="text" name="name" id="name" className={ styles.input } value={ this.state.name } onChange={ this.handleChange }></input>
                        </div>
                        <div className={ styles.group }>
                            <label htmlFor="email" className={ styles.label }>Email</label>
                            <input type="email" name="email" id="email" className={ styles.input } value={ this.state.email } onChange={ this.handleChange }></input>
                        </div>
                        <div className={ styles.group }>
                            <label htmlFor="message" className={ styles.label }>Message</label>
                            <textarea name="message" id="message" className={ styles.textarea }value={ this.state.message } onChange={ this.handleChange }></textarea>
                        </div>
                        <button className={ styles.submit }>Send</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact