import React from 'react';
import CreateRoom from '@/componentes/createRoom/CreateRoom';

const UploadPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-cover bg-center" 
    style={{ backgroundImage: "url('/images/playas.jpg')" }}>

      <div className="p-4 bg-black bg-opacity-50 w-full flex items-center justify-center min-h-full mt-16">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-4xl font-normal" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Creacion de Habitacion</h2>
              <CreateRoom />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default UploadPage;