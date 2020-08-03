// Imports

import React, { Component } from 'react'
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// ----------------------------------------------------------------------------------------------------------------------------------

// Carousel

class PhotoCarousel extends Component {

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500
          };

        return (
            
            <Slider {...settings}>
                <div className="carousel__slide">
                    <img 
                        src={require('../../images/dumbells-on-rack-dark.jpg')}
                        alt="Photo 1"
                        className="carousel__slide-pic"
                    />
                </div>
                <div className="carousel__slide">
                    <img 
                        src={require('../../images/man-using-stationary-bike-897064.jpg')}
                        alt="Photo 2"
                        className="carousel__slide-pic"
                    />
                </div>
                <div className="carousel__slide">
                    <img 
                        src={require('../../images/man-in-black-reebok-shoes-about-to-carry-barbell-949129.jpg')}
                        alt="Photo 3"
                        className="carousel__slide-pic"
                    />
                </div>
            </Slider>
            
        )

    }

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default PhotoCarousel