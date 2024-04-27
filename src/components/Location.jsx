import React from 'react'

const Location = () => {
  return (
    <div className='relative flex flex-col items-center w-full mt-6 md:mt-0 mb-12'>
        <div className='w-[95%] md:w-[90%]'>
            <h2 className='text-[30px] md:text-[42px] font-arhivo font-bold mb-4'>Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.950248900588!2d-85.5143635243124!3d33.372364873420565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzIwLjUiTiA4NcKwMzAnNDIuNCJX!5e0!3m2!1sen!2sin!4v1714225169233!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[50vh] md:h-[70vh]'></iframe>

        </div>
        
        
    </div>
  )
}

export default Location