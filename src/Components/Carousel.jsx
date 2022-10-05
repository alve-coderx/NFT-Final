import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import data from './data.json'
import Card from './Card'
import { toast } from 'react-toastify'
import './slick.css'
const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null)



  const sliderSettings = {
    // removes default buttons
    dots: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
   
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ]
  }
  return (
    <div className='pt-10 sm:pt-0 pb-[80px]' >
      <h1 style={{ color: '#42296A' }} className="text-4xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl mx-10">
        <span className="block  xl:inline">FEATURED ENDING SOON</span>
      </h1>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {
            data.slice(1,10).map((card) => (
              <Card key={card._id} card={card} />
            ))
          }
        </Slider>
    </div>
  )
}

export default Carousel