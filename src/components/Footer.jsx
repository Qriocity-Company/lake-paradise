import React from 'react'
import logo from '../assets/logo.png'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

import fb from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import useFetch from '../hooks/useFetch'

const Footer = () => {
    const { data, loading, error } = useFetch(`https://lake-paradise-admin.onrender.com/hotel/get-hotel`)

    const handleSmoothScroll = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
            top: target.offsetTop - 100, // Adjust the scroll amount here
            behavior: "smooth",
            });
        }
        toggleMenu(); // Close the menu after clicking on a link
    };
  return (
    <div className='w-full flex flex-col items-center bg-black text-white mt-8 md:mt-12 py-12 pb-24 md:py-16 md:pb-16'>
        <div className='relative w-[90%] grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-4 lg:gap-12'>
            <div className='flex flex-col gap-6'>
                <a href="/" className="relative font-barlow">
                    <img src={logo} alt="logo" className="" />
                    <div className="absolute flex items-center gap-1 w-[150px] top-[45%] -translate-y-1/2 left-[6%] ">
                    <span>Lake </span><span className="font-bold">Paradise</span>
                    </div>
                </a>
                <p className='w-[70%] text-[16px]'>Escape to Tranquil Waters at Our Lakefront Paradise on Lake Wedowee</p>
            </div>
            <div className='flex flex-col items-start md:items-center gap-4 cursor-pointer'>
                <a  onClick={() => handleSmoothScroll("about")}>About Us</a>
                <a  onClick={() => handleSmoothScroll("amenities")}>Amenities</a>
                <a  onClick={() => handleSmoothScroll("book")}>Contact</a>
            </div>
            <div className='mt-4 md:mt-0 w-full flex  items-start md:justify-end'>
                <div className='md:w-[60%] flex flex-col items-left gap-4'>
                    <div className='flex items-center gap-1 md:gap-3'>
                        <img src={phone} alt="" />
                        <p className="text-[16px] md:text-[10px] lg:text-[14px]">{data.hotel?.contacts[0]}</p>
                    </div>
                    <div className='flex items-center gap-1 md:gap-3'>
                        <img src={email} alt="" />
                        <p className="text-[16px] md:text-[10px] lg:text-[14px]">{data.hotel?.contacts[1]}</p>
                    </div>
                    <div className='flex items-right items-center gap-4 mt-4 md:mt-16'>
                        <p className='text-[13px] text-[#B3B3B3]'>Follow Us</p>
                        <div className='flex items-center gap-3'>
                            <a href="">
                                <img src={fb} alt="" />
                            </a>
                            <a href="">
                                <img src={insta} alt="" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='w-full text-center md:text-start absolute left-1/2 -translate-x-1/2 md:translate-x-0  md:left-0 -bottom-[15%] md:bottom-0 text-[#B3B3B3] md:text-[13px]'>© The Lake Paradise 2024. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer