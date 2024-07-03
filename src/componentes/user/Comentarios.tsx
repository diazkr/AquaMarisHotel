import React from 'react'
import { Comentario } from '@/interfaces/UserInterface';

const Comentarios: React.FC<Comentario> = ({
    id_comment,
    date,
    comment,
    qualification,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Comentarios</h2>
        <div>
        <p className="text-sm font-semibold">Id</p>
        <p className="text-sm">{id_comment}</p>
        </div>

        <div>
        <p className="text-sm font-semibold">Fecha</p>
        <p className="text-sm">{date}</p>
        </div>

        <div>
        <p className="text-sm font-semibold">Comentario</p>
        <p className="text-sm">{comment}</p>
        </div>

        <div>
        <p className="text-sm font-semibold">Calificacion</p>
        <p className="text-sm">{qualification}</p>
        </div>
    </div>
  )
}

export default Comentarios;