import React from 'react'
import classes from "./carousel.module.css"
import { Carousel } from "react-responsive-carousel"
import { img } from './carouselImg' 
// ` To style the Carousel we import this from npm of Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  return (
    <div>
        <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >
            {/* import images */}
            {
                img.map((imageItemLink) => (
                    <img src ={imageItemLink}
                    key={imageItemLink}/>
                ))
            }
        </Carousel>

        <div className={classes.hero_img}/>

    </div>
  )
}

export default CarouselEffect