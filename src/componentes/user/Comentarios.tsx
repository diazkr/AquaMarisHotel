import React from 'react';
import { Comentario } from '@/interfaces/UserInterface';

const ComentarioComponent: React.FC<Comentario> = ({ userId, roomId, comment, rating }) => {
    return (
        <div className="mb-4 p-4 border border-gray-300 rounded-md">
            <div>
                <p className="text-sm font-semibold">Id Usuario</p>
                <p className="text-sm">{userId}</p>
            </div>
            <div>
                <p className="text-sm font-semibold">Id Habitación</p>
                <p className="text-sm">{roomId}</p>
            </div>
            <div>
                <p className="text-sm font-semibold">Comentario</p>
                <p className="text-sm">{comment}</p>
            </div>
            <div>
                <p className="text-sm font-semibold">Calificación</p>
                <p className="text-sm">{rating}</p>
            </div>
        </div>
    );
};

export default ComentarioComponent;