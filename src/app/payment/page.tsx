"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import TermsAndConditions from '../termsAndConditions/page';
import { MdDiscount } from "react-icons/md";

interface UserData {
  name: string;
  address: string;
  age: number;
  email: string;
  phone: string;
  nationality: string;
}

const ConfirmReservation: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [acceptPolicies, setAcceptPolicies] = useState(false);
  const [error, setError] = useState('');

  // Inicializar Mercado Pago al cargar el componente
  useEffect(() => {
    try {
      initMercadoPago('YOUR_PUBLIC_KEY');
    } catch (error) {
      setError('Error al inicializar Mercado Pago.');
    }
  }, []);

  // Obtener datos del usuario desde el backend (mockeado por ahora)
  useEffect(() => {
    const mockUserData = async () => {
      try {
        // Simulando la llamada a la API
        const data: UserData = {
          name: 'Mariana Lopez Castillos',
          address: 'Calle Luis Donaldo Colosio',
          age: 33,
          email: 'mariana@gmail.com',
          phone: '5569063654',
          nationality: 'Mexicana',
        };
        setUserData(data);
        console.log('Datos del usuario mockeados:', data);

        //TODO cuando tenga el la API lista cambiar a esto
        // const response = await fetch('/api/user'); // Cambia esto cuando tengas la API
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();
        // setUserData(data);
      } catch (error) {
        setError('Error al obtener los datos del usuario.');
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    mockUserData();
  }, []);

  const handleAddCompanions = () => {
    // TODO cambiar ruta por AquaClub
    router.push('/');
  };

  const handlePayment = () => {
    if (!acceptPolicies) {
      setError('Debe aceptar las políticas para proceder con el pago.');
      return;
    }
    //  proceder con el pago
    setError('');
  };

  if (!userData) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <div className="p-5 max-w-xl mt-14 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">CONFIRMA TUS DATOS</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <div className="mb-4">
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Dirección:</strong> {userData.address}</p>
          <p><strong>Edad:</strong> {userData.age} años</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Teléfono:</strong> {userData.phone}</p>
          <p><strong>Nacionalidad:</strong> {userData.nationality}</p>
        </div>

        <div className="mb-4">
          <button
            className="w-full mb-3 py-2 px-4 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors"
            onClick={handleAddCompanions}
          >
            Tener codigos de descuento todo el año
          </button>
          <p>Si tienes un codigo de descuento agregalo aqui</p>
            <div className="flex items-center">
              <MdDiscount className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Agregar código de descuento"
                className="w-full py-2 px-4 border rounded mb-2"
              />
            </div>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="acceptPolicies"
            name="acceptPolicies"
            className="mr-2"
            checked={acceptPolicies}
            onChange={() => setAcceptPolicies(!acceptPolicies)}
          />
            <label htmlFor="acceptPolicies">
             <a href="/termsAndConditions" className='underline'>Acepto Términos y Condiciones</a>
            </label>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">¿Cómo deseas pagar?</h3>
      <div className="flex justify-between">
        <div id="wallet_container" className="w-full">
          <Wallet
            initialization={{ preferenceId: '<PREFERENCE_ID>' }}
            customization={{ texts: { valueProp: 'smart_option' } }}
            onError={() => setError('Error al cargar el componente de pago.')}
          />
        </div>
      </div>
      {/* <button
        className="w-full mt-4 py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors"
        onClick={handlePayment}
      >
        Proceder al pago
      </button> */}
    </div>
  );
};

export default ConfirmReservation;
// <script src="https://sdk.mercadopago.com/js/v2"></script>
