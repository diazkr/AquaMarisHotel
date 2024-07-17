'use client'
import React, { useState, useEffect } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import StarIcon from '@mui/icons-material/Star';
import { Comentario } from "@/interfaces/UserInterface";
import { Rating } from '@mantine/core';
import Link from "next/link";

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
                <p>Estamos ubicados en colombia, Cartagena.</p>
                <Link href='/experiencias'>
                    Dale click aqui para conocer mas detalles.
                </Link>
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
                <p className="text-lg mb-4">El hotel AquaMaris destaca por ofrecer una experiencia única que combina lujo, confort y una ubicación 
                    privilegiada frente al mar. Sus características distintivas incluyen habitaciones elegantemente decoradas 
                    con vistas espectaculares al océano, diseñadas para proporcionar un ambiente de relajación y tranquilidad. 
                    Cada detalle está cuidadosamente pensado para ofrecer una estancia inolvidable, desde el mobiliario de alta 
                    calidad hasta las comodidades modernas.</p>
                <p className="text-lg mb-4">Aqua maris tiene muchos beneficios destacados. Los huéspedes pueden disfrutar de acceso directo a la 
                    playa, donde pueden relajarse en camas balinesas o participar en actividades acuáticas emocionantes. 
                    El spa de clase mundial ofrece tratamientos rejuvenecedores y masajes relajantes, ideales para quienes 
                    buscan un descanso completo. La gastronomía es otro punto fuerte, con restaurantes que sirven desde 
                    platos locales e internacionales hasta opciones gourmet, complementadas por una extensa carta de vinos 
                    y cócteles.</p>
                <p className="text-lg mb-4">Además, el hotel AquaMaris se distingue por su servicio excepcional. El personal capacitado está siempre 
                    disponible para satisfacer las necesidades de los huéspedes, asegurando una atención personalizada y una 
                    experiencia sin complicaciones. Ya sea que se trate de planificar excursiones locales, reservar una cena 
                    romántica en la playa o simplemente brindar recomendaciones sobre actividades, el equipo está comprometido 
                    a hacer que cada estadía sea inolvidable y verdaderamente especial.</p>
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