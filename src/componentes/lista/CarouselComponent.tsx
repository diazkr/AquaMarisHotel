import React, { useState } from 'react';
import Image from 'next/image';

interface SimpleCarouselProps {
  images: string[];
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
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
    </div>
  );
};

export default SimpleCarousel;
