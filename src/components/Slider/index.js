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

    const slides = [
        {
            title: 'Slide 1', 
            text: 'this is some text'
        },
        {
            title: 'Slide 2', 
            text: 'this is some text 2'
        },
        {
            title: 'Slide 3', 
            text: 'this is some text 3'
        }
    ]

    return (
        <section className={ styles.slider }>
            <SlickSlider {...settings}>
                { 
                    slides.map(slide => (
                        <article className={ styles.slide }>
                            <h3 className={ styles.title }>{ slide.title }</h3>
                            <p className={ styles.text }>{ slide.text }</p>
                        </article>
                    ))
                }
            </SlickSlider>
        </section>
    )
}

export default Slider