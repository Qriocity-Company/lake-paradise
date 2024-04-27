import React from 'react'
import img from '../assets/about-img.png'
import useFetch from '../hooks/useFetch';

const About = () => {
  const { data, loading, error } = useFetch(`https://lake-paradise-admin.onrender.com/hotel/get-hotel`);
  const content = [
    "to our charming lake house nestled on the picturesque shores of Lake Wedowee. Immerse yourself in the serenity of nature as you relax and rejuvenate in this cozy retreat.",
    "This fully equipped home boasts 2 bedrooms and 2.5 bathrooms, comfortably accommodating 8 guests. Step inside to discover a warm and inviting living area with ample seating, a cozy fireplace, and breathtaking lake views.",
    "Prepare delicious meals in the well-stocked kitchen, featuring modern appliances and a breakfast bar. Dine indoors or al fresco on the spacious deck overlooking the shimmering waters.",
    "Unwind in the tranquil bedrooms, each adorned with comfortable beds and fresh linens.",
    "Spend unforgettable days on the private dock, fishing, swimming, or simply soaking up the sun. Explore the crystal-clear lake by kayak, available for your use.",
    "Need a boat, will provide you the local boat rentals contacts on the site."
  ];
    
  return (
    <div id='about'  className='flex flex-col w-full items-center md:my-8' >
        <div className='w-[95%] md:w-[90%] block gap-8 md:flex md:gap-8 lg:gap-16'>
            <div className='md:w-[60%] w-full md:order-2 order-1'>
                <img src={data.hotel?.aboutImage} alt="Front View of Lake House" className='h-full w-full rounded-3xl object-contain'/>
            </div>
            <div className='mt-8 md:mt-0 md:w-[40%] w-full md:order-1 order-2 font-archivo'>
                <h1 className='text-[50px] md:text-[50px] lg:text-[80px] font-bold font-bartleen'>Welcome</h1>
                {content.map((para,index)=>{
                    return (
                    <p key={index} className='font-archivo mt-3 md:mt-5 text-black text-[14px] lg:text-[18px]'>
                        {para}
                    </p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default About