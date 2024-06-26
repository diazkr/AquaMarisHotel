'use client';

import React, { useState } from 'react';

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    standard: false,
    double: true,
    deluxe: false,
    suite: false,
    family: false,
    services: {
      wifi: false,
      television: false,
      seaView: false,
      airConditioning: false,
      heating: false,
      safeBox: false,
      parking: false,
      fridge: false,
      breakfast: false,
      jacuzzi: false,
    }
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      services: {
        ...prevFilters.services,
        [name]: checked,
      },
    }));
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-600">Filtra por</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-600">TIPOS DE HABITACIÓN CON MAXIMO DE PERSONA</h3>
        <div>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="standard" checked={filters.standard} onChange={handleCheckboxChange} className="mr-2" />
            Estándar - 2 personas
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="double" checked={filters.double} onChange={handleCheckboxChange} className="mr-2" />
            Doble - 2 personas
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="deluxe" checked={filters.deluxe} onChange={handleCheckboxChange} className="mr-2" />
            Deluxe - 3 personas
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="suite" checked={filters.suite} onChange={handleCheckboxChange} className="mr-2" />
            Suite - 4 personas
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="family" checked={filters.family} onChange={handleCheckboxChange} className="mr-2" />
            Familiar - 6 personas
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-gray-600">SERVICIOS</h3>
        <div>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="wifi" checked={filters.services.wifi} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Wi-Fi
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="television" checked={filters.services.television} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Televisión
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="seaView" checked={filters.services.seaView} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Vista al mar
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="airConditioning" checked={filters.services.airConditioning} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Aire acondicionado
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="heating" checked={filters.services.heating} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Calefacción
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="safeBox" checked={filters.services.safeBox} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Caja fuerte
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="parking" checked={filters.services.parking} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Estacionamiento
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="fridge" checked={filters.services.fridge} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Nevera
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="breakfast" checked={filters.services.breakfast} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Desayuno
          </label>
          <label className="flex items-center mb-2 text-gray-600">
            <input type="checkbox" name="jacuzzi" checked={filters.services.jacuzzi} onChange={handleServiceChange} className="mr-2 text-gray-600" />
            Jacuzzi
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
