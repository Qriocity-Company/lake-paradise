import React from 'react'
import heroImg from "../assets/hero-img.png"
import useFetch from "../hooks/useFetch"
const HeroSection = () => {
    const { data, loading, error } = useFetch(`https://lake-paradise-admin.onrender.com/hotel/get-hotel`);
  return (
    <div id='home' className='w-full h-[500px] md:h-[650px] lg:h-[650px] flex flex-col items-center my-6 md:my-12'>
        <div className='w-[95%] md:w-[90%] h-[100%] md:h-90% relative'>
            <img src={data.hotel?.heroImage} alt="" className='h-[500px] md:h-full w-full rounded-lg'/>

            <div className='flex flex-col gap-4 md:gap-6 lg:gap-6 text-white absolute top-[10%] md:top-12 lg:top-[8%] left-[5%] w-[70%] lg:w-[50%] '>
                <h1 className='font-bartleen text-[70px]   md:text-[110px]  leading-[90px] md:leading-[158px]'>
                    The Lake Paradise
                </h1> 
                <p className='text-[16px] md:text-[24px] font-arhivo'>
                    Escape to Tranquil Waters at Our Lakefront Paradise on Lake Wedowee
                </p>
                <a href="#book" className="bg-[#2637D3] rounded-xl px-6 md:px-12 py-2 md:py-4 text-white hover:bg-[#212fb2] cursor-pointer w-fit text-[14px] md:text-[24px]">Book Now</a>
            </div>
        </div>
    </div>
  )
}

export default HeroSection