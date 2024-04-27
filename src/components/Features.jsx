import React,{useState,useEffect} from 'react'


const Features = () => {

  const hotelId = "66221c2cce3f47d7d06cd26a";
  
  const host = 'https://lake-paradise-admin.onrender.com';
//   const host = 'http://localhost:3001';

  const [features,setFeatures] = useState([]);

  const fetchFeatures = async()=>{
    // console.log(userId)
    const res = await fetch(`${host}/hotel/get-hotel-features`,{
        body:JSON.stringify({
            userId:"662215882d2d208c754b0dbd",
            hotelId
        }),
        headers:{
            'Content-Type':'application/json'
        },
        method:"POST"
    });
    const data = await res.json();
    setFeatures(data.features);
  }

  useEffect(()=>{
    fetchFeatures();
  },[])

  return (
    <div className='w-full h-full flex flex-col items-center mt-8 md:mt-16'>
        
        <div className='w-[95%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-x-12 lg:gap-x-24 gap-y-10 md:gap-y-6 items-start h-fit' style={{ alignContent: 'start' }}>
        {
            features.map((feature,index)=>{
                return(
                    <div key={index} className={`${index==2?' row-span-2':''} ${index>7?' mb-auto':''}`}>
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