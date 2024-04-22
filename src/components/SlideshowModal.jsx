import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SlideshowModal = ({ images, currentImageIndex, handleClose }) => {
  const [slideNumber, setSlideNumber] = useState(currentImageIndex);

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative ">
        <FontAwesomeIcon icon={faCircleXmark} className="absolute top-2 right-2 text-white cursor-pointer " onClick={handleClose} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white cursor-pointer text-2xl" onClick={() => handleMove('left')} />
        <FontAwesomeIcon icon={faCircleArrowRight} className="absolute top-1/2 right-1 transform -translate-y-1/2 text-white cursor-pointer text-2xl" onClick={() => handleMove('right')} />
        <img src={images[slideNumber]} alt="Slideshow" className="w-70vw h-70vh md:h-[80vh] md:w-[90vw]" />
      </div>
    </div>
  );
};

export default SlideshowModal;
