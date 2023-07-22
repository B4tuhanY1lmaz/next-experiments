"use client"

import { useEffect, useState } from 'react';

import Image from 'next/image';

import Styles from "./styles.module.css"

const Slideshow = ({ images = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className={Styles.slideshow}>
            {images.map((image, index) => (
                <Image
                key={index}
                src={image}
                fill={true}
                alt=""
                className={`slide ${index === currentSlide ? 'active' : ''}`} 
                />
            ))}
        </div>
    )
}

export default Slideshow;