import React,{useState,useEffect} from 'react'
const userId = import.meta.env.VITE_USER_ID;

const Features = () => {

  const hotelId = "66221c2cce3f47d7d06cd26a";
  
  const host = 'https://lake-paradise-admin.onrender.com';
//   const host = 'http://localhost:3001';

  const [features,setFeatures] = useState([]);

  const fetchFeatures = async()=>{
    console.log(userId)
    const res = await fetch(`${host}/hotel/get-hotel-features`,{
        body:JSON.stringify({
            userId,hotelId
        }),
        headers:{
            'Content-Type':'application/json'
        },
        method:"POST"
    });
    const data = await res.json();
    console.log(data);
    setFeatures(data.features);
  }

  useEffect(()=>{
    fetchFeatures();
  },[])

  return (
    <div className='w-full flex flex-col items-center mt-12'>
        <div className='w-[95%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-x-12 lg:gap-x-24 gap-y-10 md:gap-y-4'>
        {
            features.map((feature,index)=>{
                return(
                    <div key={index} className={`${index==2?' row-span-2':''}`}>
                        <div className='bg-black text-white rounded-xl  px-6 md:px-8 lg:px-12 py-2 md:py-4 text-[16px] md:text-[20px] lg:text-[24px] w-fit'>
                            {feature.title}
                        </div>
                        <ul className='pl-8 text-[16px] mt-3 md:mt-6 list-disc flex flex-col gap-2'>
                        {
                            feature.content.map((str,index)=>(
                                <li key={index}>{str}</li>
                            ))
                        }
                        </ul>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Features