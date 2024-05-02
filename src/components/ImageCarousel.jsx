import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import useFetch from '../hooks/useFetch'

function ImageCarousel({hotelImages}) {

    const settings = {
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "linear",
        prevArrow:<ArrowLeftCircle className=""/>,
        nextArrow:<ArrowRightCircle className=""/>
      };
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);


  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, [hotelImages]);


    
  return (
    <div id='photos' className="slider-container flex flex-col justify-center items-center z-10 w-[95vw] md:w-[80vw] lg:w-[70vw] px-4 md:p-8 mb-10">
        
        <Slider  {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}  className="h-full w-full flex justify-center items-center">
        {
            hotelImages.map((item,index)=>{
                
                return(
                <div key={index} className="h-full w-full z-50 p-1">
                    <img src={item.img} alt="" className="w-full h-[60vh] md:-[50vh] lg:h-[70vh] object-cover"/>
                    <div className=" bg-[#2637D3] text-white text-lg font-semibold py-2 px-6 w-full">
                    {item.title}
                    </div>
                </div>
                )
            })
        }
        </Slider>
        <Slider
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            className="w-[80%] z-20 flex justify-center items-center"
            nextArrow={<></>}
            prevArrow={<></>}
        >
        {
            hotelImages.map((item,index)=>{
                
                return(
                <div key={index} className="h-full w-full z-50 p-1">
                    <img src={item.img} alt="" className="w-full h-[30vh] md:-[20vh] lg:h-[20vh] object-cover"/>
                </div>
                )
            })
        }
        </Slider>
    </div>
  
  );
}

export default ImageCarousel;
