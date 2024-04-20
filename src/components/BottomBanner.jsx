import React from 'react'
import bannerImg from '../assets/Bottom_Banner.png'
const BottomBanner = () => {
  return (
    <div className='bg-[#E9F3F6] md:py-8 py-6 w-full flex flex-col items-center'>
        <div className='md:w-[90%] w-[95%] md:flex gap-8 md:gap-12'>
            <div className='w-full md:w-[60%] flex flex-col justify-around font-archivo '>
                <h2 className='text-[26px] md:text-[42px] font-bold'>What this place offers</h2>
                <p className='text-[18px] md:text-[29px]'>Entire home in Lake Wedowee, Alabama. 2 bedroom and 2.5 bathrooms</p>
                <div className='bg-[#CAE2E9] rounded-xl shadow-lg p-4 md:p-6 px-8 md:px-12 flex flex-col gap-2 w-fit mt-4 md:mt-0'>
                    <p className='text-[18px] md:text-[24px]'> <span className='font-bold'>Check in time : </span> <span>4:00PM</span> </p>
                    <p className='text-[18px] md:text-[24px]'> <span className='font-bold'>Check out time : </span> <span>11:00AM</span> </p>
                </div>
            </div>
            <div className='w-full md:w-[40%] mt-6 md:mt-0'>
                <img src={bannerImg} alt="" className='h-full w-full'/>
            </div>
        </div>
    </div>
  )
}

export default BottomBanner