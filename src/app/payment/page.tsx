'use client';

import React, { useState, useEffect } from 'react';
import { useFilters } from '@/contextos/FilterContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { format } from 'date-fns';

interface Companion {
  name: string;
  identityCard: number;
}

const PaymentView: React.FC = () => {
  const { hotel, arriveDate, departureDate, people, setFilters } = useFilters();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [userId, setUserId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [error, setError] = useState('');
  const [bookingSuccessful, setBookingSuccessful] = useState(false);
  const [preferenceId, setPreferenceId] = useState('');

  // Nuevas variables de estado para los datos adicionales de la habitación
  const [roomPrice, setRoomPrice] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [roomServices, setRoomServices] = useState<string[]>([]);

  // Estados para los datos del usuario
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContry, setUseContry] = useState('');
  const [userPhone, setUsePhone] = useState('');

  useEffect(() => {
    initMercadoPago('APP_USR-50c5501b-9412-483e-874b-6653c0de1f93');
  }, []);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId') || '';
    const storedRoomId = localStorage.getItem('rommUUID') || '';
    const storedCheckInDate = localStorage.getItem('checkInDate') || '';
    const storedCheckOutDate = localStorage.getItem('checkOutDate') || '';
    const storedRoomPrice = localStorage.getItem('roomPrice') || '';
    const storedRoomDescription = localStorage.getItem('roomDescription') || '';
    const storedRoomServices = JSON.parse(localStorage.getItem('roomServices') || '[]');
    const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');

    setUserId(storedUserData.id || '');
    setRoomId(storedRoomId);
    setCheckInDate(storedCheckInDate);
    setCheckOutDate(storedCheckOutDate);
    setRoomPrice(storedRoomPrice);
    setRoomDescription(storedRoomDescription);
    setRoomServices(storedRoomServices);

    // Setear datos del usuario desde localStorage
    setUserName(storedUserData.name || '');
    setUserEmail(storedUserData.email || '');
    setUseContry(storedUserData.country || '');
    setUsePhone(storedUserData.phone || '');
  }, []);

  const handleAddCompanion = () => {
    setCompanions([...companions, { name: '', identityCard: 0 }]);
  };

  const handleCompanionChange = (index: number, field: keyof Companion, value: string | number) => {
    const newCompanions = companions.slice();
    newCompanions[index] = { ...newCompanions[index], [field]: value };
    setCompanions(newCompanions);
  };

  const handleSubmit = async () => {
    const bookingData = {
      check_in_date: format(arriveDate!, 'yyyy-MM-dd'),
      check_out_date: format(departureDate!, 'yyyy-MM-dd'),
      userId,
      roomId,
      companions,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la reserva. Por favor, inténtelo nuevamente más tarde.');
      }

      alert('Envio de información exitosa');

      const responseData = await response.json();
      const preferenceId = responseData.order.id;

      setPreferenceId(preferenceId);
      setBookingSuccessful(true);
    } catch (error) {
      setError('Error al enviar la reserva. Por favor, inténtelo nuevamente más tarde.');
      console.error('Error en la solicitud de reserva:', error);
    }
  };

  return (
    <div className="payment-view mt-20 max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Reservar Habitación</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Fecha de llegada: {arriveDate?.toDateString()}</label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Fecha de salida: {departureDate?.toDateString()}</label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Agregar Acompañantes (opcional):</label>
          {companions.map((companion, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                placeholder="Nombre"
                value={companion.name}
                onChange={(e) => handleCompanionChange(index, 'name', e.target.value)}
                className="block w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Cédula de Identidad"
                value={companion.identityCard}
                onChange={(e) => handleCompanionChange(index, 'identityCard', parseInt(e.target.value, 10))}
                className="block w-full px-3 py-2 border rounded-lg mt-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCompanion}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2"
          >
            Agregar Acompañante
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Código de Descuento (opcional):</label>
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="block w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <h2 className="text-xl font-bold mt-8">Datos del Usuario</h2>
        <p className="mb-2">ID de Usuario: {userId}</p>
        <p className="mb-2">Nombre: {userName}</p>
        <p className="mb-4">Correo Electrónico: {userEmail}</p>
        <p className="mb-4">Pais: {userContry}</p>
        <p className="mb-4">Cel: {userPhone}</p>
      
        <h2 className="text-xl font-bold">Datos de la Habitación</h2>
        <p className="mb-2">Número de Habitación: {roomId}</p>
        <p className="mb-2">Descripción: {roomDescription}</p>
        <p className="mb-2">Precio: ${roomPrice}</p>
        <p className="mb-4">Servicios: {roomServices.join(', ')}</p>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Siguiente
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {bookingSuccessful && preferenceId && (
        <div id="wallet_container" className="w-full mt-4">
          <Wallet
            initialization={{ preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
            onError={() => setError('Error al cargar el componente de pago.')}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentView;
