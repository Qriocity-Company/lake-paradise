import React from 'react'

const Location = () => {
  return (
    <div className='flex flex-col items-center w-full mb-12'>
        <div className='w-[95%] md:w-[90%]'>
            <h2 className='text-[30px] md:text-[42px] font-arhivo font-bold mb-4'>Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64873.072912219315!2d-85.5104677265058!3d33.38161346511566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888b0d00431bb50b%3A0xe8336ae3775a3033!2sLake%20Paradise!5e0!3m2!1sen!2sin!4v1713799502803!5m2!1sen!2sin"  className='w-full h-[50vh] md:h-[70vh]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    </div>
  )
}

export default Location