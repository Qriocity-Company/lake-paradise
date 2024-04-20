import React from 'react'

const Location = () => {
  return (
    <div className='flex flex-col items-center w-full mb-12'>
        <div className='w-[95%] md:w-[90%]'>
            <h2 className='text-[30px] md:text-[42px] font-arhivo font-bold mb-4'>Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.1678361351405!2d78.03619537535484!3d30.289283274801235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929e86761c4eb%3A0x5323efdae03e16ba!2sYellow%20Hills%20Restaurant%2C%20Bar%20%26%20Cafe!5e0!3m2!1sen!2sin!4v1713341729454!5m2!1sen!2sin"  className='w-full h-[50vh] md:h-[70vh]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Location