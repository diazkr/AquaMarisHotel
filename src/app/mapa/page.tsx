import MapComponent from '@/componentes/mapa/MapComponent';
import React from 'react';
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('../../componentes/mapa/MapComponent'),{ssr:false})

const HotelPage = () => {
  return (
    <div className='my-24 w-[60%]' style={{height: '500px' }}>
      <DynamicMap />
    </div>
  );
};

export default HotelPage;
