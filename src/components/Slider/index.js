import React from 'react'
import SlickSlider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.scss'

function Slider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <section className={ styles.slider }>
            <SlickSlider {...settings}>
                <article className={ styles.slide }>
                    <h3 className={ styles.title }>Slide 1</h3>
                    <p className={ styles.text }>this is some text</p>
                </article>
                <article className={ styles.slide }>
                    <h3 className={ styles.title }>Slide 2</h3>
                    <p className={ styles.text }>this is some text</p>
                </article>
                <article className={ styles.slide }>
                    <h3 className={ styles.title }>Slide 3</h3>
                    <p className={ styles.text }>this is some text</p>
                </article>
            </SlickSlider>
        </section>
    )
}

export default Slider