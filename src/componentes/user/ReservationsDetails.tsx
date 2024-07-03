import React from 'react'
import { ReservationInterface } from '@/interfaces/UserInterface'

const ReservationsDetails: React.FC<ReservationInterface> = ({ 

    reservation_id,
    userId,
    roomId,
    entry_date,
    departure_date,
    payment_status,
    companions,

 }) => {

  //if (!reservas || reservas.length === 0) {
    //return <p>No hay reservas disponibles.</p>;
  //}
  return (

    <div className="max-w-2xl mx-auto my-8 px-6">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">Historial de Reservas</h2>
      
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden p-6">
          
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Reserva</p>
              <p className="text-sm text-gray-900">{reservation_id}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Usuario</p>
              <p className="text-sm text-gray-900">{userId}</p>
            </div>
              
            <div className="mb-4"> 
              <p className="text-sm font-semibold text-gray-700">Habitacion</p>
              <p className="text-sm text-gray-900">{roomId}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Fecha de Entrada</p>
              <p className="text-sm text-gray-900">{entry_date}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Fecha de salida</p>
              <p className="text-sm text-gray-900">{departure_date}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Estado de pago</p>
              <p className="text-sm text-gray-900">{payment_status}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">Acompañantes</p>
              <p className="text-sm text-gray-900">{companions ? companions.map(a => a.name).join(', ') : 'Ninguno'}</p>
            </div>
      </div>
    </div>
    
  )
}

export default ReservationsDetails;