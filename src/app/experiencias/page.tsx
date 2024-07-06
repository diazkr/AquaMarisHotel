import MapComponent from '@/componentes/mapa/MapComponent';
import React from 'react';
import dynamic from "next/dynamic"
import ImageExp from '@/componentes/mapa/ImageExperience';

const DynamicMap = dynamic(() => import('../../componentes/mapa/MapComponent'),{ssr:false})

const HotelPage = () => {
  return (
    <div>

      <ImageExp/>


    
    <div className='my-24' style={{height: '500px' }}>
      <DynamicMap />
    </div>
    </div>
  );
};

export default HotelPage;
