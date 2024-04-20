import React from 'react'
import frontPatio from '../assets/Front_patio.png';
import masterBedroom from '../assets/Master_Bedroom.png';
import outdoorDining from '../assets/Outdooor_dining.png';
import backPatio from '../assets/back_Patio.png';


const RoomImages = () => {
  
  const roomData =[
    {
        title:'Front Patio',
        img:frontPatio
    },
    {
        title:'Master Bedroom',
        img:masterBedroom
    },
    {
        title:'Outdoor Dining',
        img:outdoorDining,
    },
    {
        title:'Main Back Patio',
        img:backPatio
    }
  ] 


  return (
    <div className='w-full flex flex-col items-center my-12'>
        <div className='md:w-[90%] w-[95%] grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8'>
        {
            roomData.map((room,index)=>{
                return(
                    <div className='relative' key={index}>
                        <img src={room.img} alt={room.title} className='h-full w-full'/>
                        <div className={`bg-black z-50 absolute bottom-0 text-white md:text-2xl px-8 md:px-12 py-4 ${index%2==0?'right-0 rounded-tl-3xl':'left-0 rounded-tr-3xl'} `}>{room.title}</div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default RoomImages