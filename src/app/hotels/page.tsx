import React from 'react';
import Hotels from '@/componentes/hotels/Hotels';
import ImageHotels from '@/componentes/hotels/ImagenHotels';


const ViewHotels: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <ImageHotels/>
        <Hotels />
      </div>
    </div>
  );
};

export default ViewHotels;