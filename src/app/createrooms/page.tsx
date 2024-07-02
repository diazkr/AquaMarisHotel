import React from 'react';
import CreateRoom from '@/componentes/createRoom/CreateRoom';

const UploadPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-cover bg-center" 
    style={{ backgroundImage: "url('/images/playas.jpg')" }}>

      <div className="p-4 bg-black bg-opacity-50 w-full flex items-center justify-center min-h-full mt-16">
        <div className="bg-white bg-opacity-60 py-6 rounded-lg shadow-lg w-[50%]">
            <p className="text-2xl text-center text-cyan-900 font-semibold" >Creacion de Habitacion</p>
              <CreateRoom />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default UploadPage;