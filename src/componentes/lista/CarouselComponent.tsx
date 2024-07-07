import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosExpand } from 'react-icons/io';
import { Modal, Box, IconButton } from '@mui/material';

interface SimpleCarouselProps {
  images: string[];
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <Image src={image} alt={`Imagen ${index}`} layout="fill" objectFit="cover" />
              <div className="absolute bottom-2 left-2 bg-white bg-opacity-50 text-slate-700 p-1 rounded text-xs">
                {index + 1} de {images.length}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl hover:bg-opacity-100"
        >
          &#8249;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl hover:bg-opacity-100"
        >
          &#8250;
        </button>
        <button
          onClick={openModal}
          className="absolute top-2 right-2 bg-white bg-opacity-50 p-2 rounded-full text-lg hover:bg-opacity-100 text-slate-700"
        >
          <IoIosExpand />
        </button>
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-carousel"
        aria-describedby="modal-carousel-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflow: 'hidden',
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <Image src={image} alt={`Imagen ${index}`} layout="fill" objectFit="cover" />
                <div className="absolute bottom-2 left-2 bg-white bg-opacity-50 text-slate-700 p-1 rounded text-xs">
                  {index + 1} de {images.length}
                </div>
              </div>
            ))}
          </div>
          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              left: 2,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: '#d9eeec'
            }}
            className='w-8 h-8 m-1 hover:opacity-50'
          >
            &#8249;
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 2,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: '#d9eeec',
            }}
            className='w-8 h-8 m-1 hover:opacity-50'
          >
            &#8250;
          </IconButton>
          <IconButton
            onClick={closeModal}
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              bgcolor: 'white',
            }}
            className='w-8 h-8 m-1 hover:opacity-50'
          >
            &#10005;
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default SimpleCarousel;
