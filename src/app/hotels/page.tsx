import React from 'react';
import Hotels from '@/componentes/hotels/Hotels';
import ImageHotels from '@/componentes/hotels/ImagenHotels';
import GuideToExperiences from '@/componentes/vistas/vistaExperiencias/GuideToExperiences';


const ViewHotels: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <ImageHotels/>
        <GuideToExperiences text="Hoteles"/>

        <Hotels />
      </div>
    </div>
  );
};

export default ViewHotels;