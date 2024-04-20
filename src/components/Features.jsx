import React from 'react'

const Features = () => {

  const features=[
    {
        title:'Location Features',
        content:[
            'Waterfront – Right next to a body of water',
            'Lake access – Guest can get to a lake using a path or dock (25’ X 12’)'
        ]
    },
    {
        title:'Bathroom',
        content:[
            'Hair Dryer',
            'Shampoo',
            'Body Soap',
            'Hot Water',
            'Shower Gel',
        ]
    },
    {
        title:'Kitchen and Dining',
        content:[
            "Refrigerator",
            "Microwave",
            "Pots and Pans",
            "Dishes and Silverware",
            "Cutlery",
            "Dishwasher",
            "Stainless Steel Stove",
            "Hot water kettle",
            "Coffee maker – Drip coffee maker",
            "Wine glasses",
            "Toaster",
            "Air fryer",
            "Rice maker (Instant pot)",
            "Blender"
        ]
    },
    {
        title:'Bedroom and Laundry',
        content:[
            "Washer and dryer",
            "Bed linens",
            "Cotton linens",
            "Clothing storage, walk-in closet and dresser"
        ]
    },
    {
        title:'Entertainment',
        content:[
            "TV",
            "Ping Pong Table",
            "Pool Table",
            "Corn Hole",
            "Board Games",
            "Books and reading materials"
        ]
    },
    {
        title:'Heating and Cooling',
        content:[
            "Washer and dryer",
            "Bed linens",
            "Cotton linens",
            "Clothing storage, walk-in closet and dresser",
            "Air conditioning",
            "Cooling Fan",
            "Central heating"
        ]
    },
    {
        title:'Internet and office',
        content:[
            "Internet",
            "Dedicated Workplace",
        ]
    },
    {
        title:'Services',
        content:[
            "Pets allowed under 30 lbs (pet fees are separate)",
            "Service animals are always allowed",
            "Long term stays allowed",
            "Silent hours are from 11 PM"
        ]
    },
    {
        title:'Outdoor',
        content:[
            "Firepit",
            "BBQ Grill",
        ]
    },
    {
        title:'Parking and Facilities',
        content:[
            "Free parking available on premises",
        ]
    },
    {
        title:'Home Safety',
        content:[
            "Smoke Alarm, Carbon monoxide alarm",
            "Fire extinguisher, First Aid kit"
        ]
    },
  ]

  return (
    <div className='w-full flex flex-col items-center mt-12'>
        <div className='w-[95%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-x-24 gap-y-10 md:gap-y-4'>
        {
            features.map((feature,index)=>{
                return(
                    <div key={index} className={`${index==2?' row-span-2':''}`}>
                        <div className='bg-black text-white rounded-xl  px-8 md:px-12 py-2 md:py-4 text-[18px] md:text-[24px] w-fit'>
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