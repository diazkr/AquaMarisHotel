import React from 'react';
import AquaClub from '@/componentes/aquaClub/AquaClub';
import ImageAquaClub from '@/componentes/aquaClub/imagenAquaClub';

const ViewAquaClub: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <ImageAquaClub/>
        <AquaClub />
      </div>
    </div>
  );
};

export default ViewAquaClub;