import React from 'react'
import heroImg from "../assets/hero-img.png"
const HeroSection = () => {
  return (
    <div className='w-full flex flex-col items-center my-6 md:my-12'>

        <div className='w-[95%] md:w-[90%] relative'>
            <img src={heroImg} alt="" className='h-[60vh] md:h-full w-full rounded-lg'/>

            <div className='flex flex-col gap-4 md:gap-8 text-white absolute top-[20%] left-[5%] w-[70%] '>
                <h1 className='font-bartleen text-[60px] md:text-[128px] leading-[70px] md:leading-[158px]'>
                    The Lake Paradise
                </h1> 
                <p className='text-[16px] md:text-[24px] font-arhivo'>
                    Escape to Tranquil Waters at Our Lakefront Paradise on Lake Wedowee
                </p>
                <a href="" className="bg-[#2637D3] rounded-xl px-6 md:px-12 py-2 md:py-4 text-white hover:bg-[#212fb2] cursor-pointer w-fit text-[14px] md:text-[24px]">Book Now</a>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection