'use client'
import React, { useState, useEffect } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import StarIcon from '@mui/icons-material/Star';
import { Comentario } from "@/interfaces/UserInterface";
import { Rating } from '@mantine/core';

const Hotels: React.FC = () => {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(5); 

    useEffect(() => {
        fetchComentarios();
    }, []);

    const fetchComentarios = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment`);
            if (!response.ok) {
                throw new Error('No se pudo obtener los comentarios');
            }
            const data = await response.json();
            setComentarios(data);  
        } catch (error) {
            console.error('Error al obtener los comentarios:', error);
        }
    };

    // Paginación de comentarios
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comentarios.slice(indexOfFirstComment, indexOfLastComment);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="mt-12 w-[60%]">
            <h2 className="my-6 text-4xl text-gray-700 tracking-wider font-medium">AquaMaris Hotel</h2>
            <div className="w-60 h-1 bg-[#17858A] my-6"></div>
            <p className="text-lg mb-4">
                AquaMaris es un hotel de lujo ubicado en una ubicación privilegiada, dedicado a ofrecer experiencias únicas a sus huéspedes.
            </p>
            <p className="text-lg mb-4">
                Ofrecemos vistas impresionantes, servicios de primera clase y una atención al cliente excepcional para asegurar que cada estancia sea memorable.
            </p>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-2">
                    <LocationOnIcon className="mr-2" />Ubicación
                </h3>
                <p>Inserta aquí la ubicación del hotel.</p>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-2">
                    <RoomServiceIcon className="mr-2" />Servicios
                </h3>
                <ul className="list-disc list-inside">
                    <li>Piscina infinita con vista al mar</li>
                    <li>Spa y centro de bienestar</li>
                    <li>Restaurante gourmet con chefs premiados</li>
                    <li>Actividades recreativas como deportes acuáticos y excursiones guiadas</li>
                    <li>Wi-Fi gratuito en todas las áreas</li>
                </ul>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-2">
                    <StarIcon className="mr-2" />Lo que nos hace especiales
                </h3>
                <p>Describe aquí las características únicas y los beneficios destacados del hotel AquaMaris.</p>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-2">Comentarios de los usuarios</h3>
                {comentarios.length === 0 ? (
                    <p>¡No hay comentarios disponibles!</p>
                ) : (
                    <>
                {currentComments.map((comentario, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                        <p className="text-lg font-semibold">{comentario.comment}</p>
                        <p className="text-gray-700">{comentario.comment_date}</p>
                        <Rating name="read-only" value={comentario.rating} readOnly />
                    </div>
                ))}
                {/* Paginación */}
                <ul className="flex list-none">
                    {Array.from({ length: Math.ceil(comentarios.length / commentsPerPage) }, (_, i) => (
                        <li key={i}>
                            <button
                                onClick={() => paginate(i + 1)}
                                className={`px-3 py-1 mx-1 rounded-md ${currentPage === i + 1 ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul> 
            </>
            )}
            </div>
        </div>
    );
};

export default Hotels;