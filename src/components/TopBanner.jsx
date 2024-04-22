import React from 'react'

const TopBanner = () => {
  return (
    <>
    <div className="py-14"></div>
    <div className='bg-[#D35A26] Z-50 text-white w-full h-full py-4 flex flex-col items-center'>
        <p className='w-[90%] text-[16px] md:text-[20px] flex items-center justify-center text-center gap-2'>
          <h3 className=''>
          <marquee direction="right"> <span className='font-semibold'>20% off nightly rate!</span>
            <span className='ml-1'>

                Cozy Lake House to RELAX & UNWIND! Fishing, Deck, Fireplace, Dock, Kayaks & Pet Friendly
            </span>
            </marquee>
          </h3>
        </p>
    </div>
    </>
  )
}

export default TopBanner