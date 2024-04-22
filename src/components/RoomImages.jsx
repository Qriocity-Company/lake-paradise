import React, { useState } from 'react';
import SlideshowModal from './SlideshowModal';
import frontPatio from '../assets/Front_patio.png';
import masterBedroom from '../assets/Master_Bedroom.png';
import outdoorDining from '../assets/Outdooor_dining.png';
import backPatio from '../assets/back_Patio.png';
import useFetch from '../hooks/useFetch';

const RoomImages = () => {
  const { data, loading, error } = useFetch(`https://lake-paradise-admin.onrender.com/hotel/get-hotel`);

  const roomData = [
    {
      title: 'Front Patio',
      img: frontPatio
    },
    {
      title: 'Master Bedroom',
      img: masterBedroom
    },
    {
      title: 'Outdoor Dining',
      img: outdoorDining,
    },
    {
      title: 'Main Back Patio',
      img: backPatio
    }
  ];

  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenSlideshow = (index) => {
    setCurrentImageIndex(index);
    setShowSlideshow(true);
  };

  const handleCloseSlideshow = () => {
    setShowSlideshow(false);
  };

  return (
    <div className='w-full flex flex-col items-center my-12'>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className='md:w-[90%] w-[95%] grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8'>
          {data.hotel?.hotelImages.map((image, index) => {
            return (
              <div className='relative' key={index}>
                <img src={image.img} alt={image.title} className='h-full w-full cursor-pointer' onClick={() => handleOpenSlideshow(index)} />
                <div className={`bg-black z-0 absolute bottom-0 text-white md:text-2xl px-8 md:px-12 py-4 ${index % 2 == 0 ? 'right-0 rounded-tl-3xl' : 'left-0 rounded-tr-3xl'} `}>{image.title}</div>
              </div>
            )
          })}
        </div>
      )}
      {showSlideshow && (
        <SlideshowModal
          images={data.hotel?.hotelImages.map(image => image.img)}
          currentImageIndex={currentImageIndex}
          handleClose={handleCloseSlideshow}
        />
      )}
    </div>
  )
}

export default RoomImages;
