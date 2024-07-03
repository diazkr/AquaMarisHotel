"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const ConfirmReservation: React.FC = () => {
  const router = useRouter();

  const handleAddCompanions = () => {
    // Redirigir al home
    router.push('/');
  };

  return (
    <div className="p-5 max-w-xl mt-14 mx-auto">
      <h2 className="text-2xl font-bold mb-4">CONFIRMA TUS DATOS:</h2>
      <div className="mb-4">
        <p>Nombre: Mariana Lopez Castillos</p>
        <p>Dirección: Calle Luis Donaldo Colosio</p>
        <p>Edad: 33 años</p>
        <p>Email: mariana@gmail.com</p>
        <p>Teléfono: 5569063654</p>
        <p>Nacionalidad: Mexicana</p>
      </div>
      <div className="mb-4">
        <button
          className="w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleAddCompanions}
        >
          Deseas agregar más acompañantes
        </button>
        <input
          type="text"
          placeholder="Agregar código de descuento"
          className="w-full py-2 px-4 border rounded mb-2"
        />
      </div>
      <div className="mb-4">
        <input type="checkbox" id="acceptPolicies" name="acceptPolicies" className="mr-2" />
        <label htmlFor="acceptPolicies">Acepta nuestras políticas</label>
      </div>
      <h3 className="text-xl font-bold mb-4">¿Cómo deseas pagar?</h3>
      <div className="flex justify-between">
        
      </div>
    </div>
  );
};

export default ConfirmReservation;
