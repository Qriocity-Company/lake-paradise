import React from 'react'
import entertainment from '../assets/entertainment.svg'
import inHome from '../assets/inHome.svg'
import kitchen from '../assets/kitchen.svg'
import outdoor from '../assets/outdoor.svg'


const Amenity=({title,content,img})=>{
    return(
        <div className='bg-[#F0F0F0] rounded-lg border-[2px] border-[#C9C9C9] md:p-8 p-4 flex flex-col items-center justify-center gap-4 font-archivo'>
            <div className='hover:-translate-y-[6px] transition-all'>
                <img src={img} alt={title} className='h-full w-full'/>
            </div>
            <h3 className='w-full text-center text-wrap font-bold text-[14px] md:text-[16px] '>{title}</h3>
            <p className='text-center text-[12px] md:text-[16px] md:mt-1'>{content}</p>
        </div>
    )
}

const Amenities = () => {

  const amenities=[
    {
        img:kitchen,
        title:'Fully Equipped Kitchen',
        content:'Kitchenette, cutlery, Instant pot, Blender, Toaster'
    },
    {
        img:outdoor,
        title:'Outdoor Attractions',
        content:'Dining area, Private dock with Boat slip, Kayaks,Cozy fireplace, Ample Parking'
    },
    {
        img:inHome,
        title:'In Home Facilities',
        content:'Smart TV and Wi-Fi,Washer and dryer, Books'
    },
    {
        img:entertainment,
        title:'Entertainment',
        content:'Board Games, Pool table, Air hockey, Ping pong table'
    },
  ]

  return (
    <div id='amneties' className='flex flex-col w-full items-center my-8 md:my-12'>
        <div className='w-[95%] md:w-[90%] flex flex-col'>
            <h1 className='text-[30px] md:text-[42px] font-arhivo font-bold'>Amenities</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-6 md:gap-8 gap-4'>
            {
            amenities.map((amenity,index)=>{
                return(
                    <Amenity title={amenity.title} img={amenity.img} content={amenity.content} key={index}/>
                )
            })   
            }
            </div>
        </div>
    </div>
  )
}

export default Amenities