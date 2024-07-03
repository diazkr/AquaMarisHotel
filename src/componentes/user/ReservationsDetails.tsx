import React from 'react'
import { ReservationInterface } from '@/interfaces/UserInterface'

const ReservationsDetails: React.FC<ReservationInterface> = ({ 
    id_reserva,
    id_usuario,
    id_habitacion,
    fecha_entrada,
    fecha_salida,
    estado_pago,
    acompanantes,

 }) => {

  //if (!reservas || reservas.length === 0) {
    //return <p>No hay reservas disponibles.</p>;
  //}
  return (

    <div className="p-4">
      <h2 className="text-2xl mb-4">Historial de Reservas</h2>

      <div>
      <p className="text-sm font-semibold">Reserva</p>
      <p className="text-sm">{id_reserva}</p>
      </div>

      <div>
      <p className="text-sm font-semibold">Usuario</p>
      <p className="text-sm">{id_usuario}</p>
      </div>
      
      <div>
      <p className="text-sm font-semibold">Habitacion</p>
      <p className="text-sm">{id_habitacion}</p>
      </div>

      <div>
      <p className="text-sm font-semibold">Fecha de Entrada</p>
      <p className="text-sm">{fecha_entrada}</p>
      </div>

      <div>
      <p className="text-sm font-semibold">Fecha de salida</p>
      <p className="text-sm">{fecha_salida}</p>
      </div>

      <div>
      <p className="text-sm font-semibold">Estado de pago</p>
      <p className="text-sm">{estado_pago}</p>
      </div>

      <div>
      <p className="text-sm font-semibold">Acompañantes</p>
      <p className="text-sm">{acompanantes ? acompanantes.map(a => a.name).join(', ') : 'Ninguno'}</p>
      </div>

      
    </div>
    
  )
}

export default ReservationsDetails;