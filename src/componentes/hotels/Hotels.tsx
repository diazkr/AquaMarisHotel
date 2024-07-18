"use client";
import React, { useState, useEffect } from "react";
import { Comentario } from "@/interfaces/UserInterface";
import { Rating } from "@mantine/core";
import Image from "next/image";
import ServiceCard from "./CardHotels";
import ServiceCardChange from "./CardHotelOtherDirection";
import { LocationCity } from "@mui/icons-material";

const Hotels: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comment`
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener los comentarios");
      }
      const data = await response.json();
      setComentarios(data);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
    }
  };

  const getImageUrl = (userPhoto: string | undefined) => {
    if (userPhoto && !userPhoto.endsWith("photo.jpg")) {
      return userPhoto;
    }
    return "/iconos/usuario.png";
  };

  // Paginación de comentarios
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comentarios.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mt-12 w-[60%]">
      <h2 className="my-6 text-4xl text-gray-700 tracking-wider font-medium">
        AquaMaris Hotel
      </h2>
      <div className="w-60 h-1 bg-[#17858A] my-6"></div>
      <p className="text-lg mb-4">
        AquaMaris es un hotel de lujo ubicado en una ubicación privilegiada,
        dedicado a ofrecer experiencias únicas a sus huéspedes. Ofrecemos vistas
        impresionantes, servicios de primera clase y una atención al cliente
        excepcional.
      </p>

      <div className="my-6">
        <h2 className="text-2xl text-gray-700 tracking-wider font-medium">
          Servicios
        </h2>
        <div className="w-40 h-1 bg-[#17858A] my-2 mx-3"></div>
      </div>

      <div>
        <ServiceCard
          backgroundUrl="https://i.pinimg.com/564x/a7/13/fd/a713fd0bc59a293b00a3908c3a5ee700.jpg"
          foregroundUrl="https://i.pinimg.com/564x/1f/4f/32/1f4f3203af723e24bcca73d506bebe2b.jpg"
          overlayColor="rgba(217, 238, 236, 0.1)"
          serviceName="AQUA Restaurante"
          description="En Aqua Maris, la alta cocina se encuentra con las tradiciones locales en un festín de sabores únicos y extraordinarios."
        />
      </div>

      <div>
        <ServiceCardChange
          backgroundUrl="https://i.pinimg.com/564x/a7/13/fd/a713fd0bc59a293b00a3908c3a5ee700.jpg"
          foregroundUrl="https://i.pinimg.com/564x/50/2b/24/502b24120f8ebd356468e08017e3b9e1.jpg"
          overlayColor="rgba(217, 238, 236, 0.1)"
          serviceName="PISCINA infinita"
          description="Disfruta de un refrescante chapuzón en nuestra piscina infinita, que ofrece vistas impresionantes del mar y un ambiente relajante."
        />
      </div>

      <div>
        <ServiceCard
          backgroundUrl="https://i.pinimg.com/564x/a7/13/fd/a713fd0bc59a293b00a3908c3a5ee700.jpg"
          foregroundUrl="https://i.pinimg.com/564x/7c/f6/32/7cf6323fef0438cb8997eab5ec7c5d7c.jpg"
          overlayColor="rgba(217, 238, 236, 0.1)"
          serviceName="ACTIVIDADES"
          description="Sumérgete en una variedad de actividades recreativas, desde deportes acuáticos emocionantes hasta excursiones guiadas fascinantes."
        />
      </div>

      <div className="my-6">
      <h2 className="text-2xl text-gray-700 tracking-wider font-medium flex items-center">
        Ubicación
      </h2>
      <div className="w-40 h-1 bg-[#17858A] my-2 mx-3"></div>
      <p className="text-lg mb-4">
        ¡Nos encontramos en el corazón de la paradisíaca isla de San Andrés!
      </p>
      <div className=" p-4  flex items-center">
        <LocationCity className="text-[#17858A] text-4xl mr-4" />
        <div>
          <p className="text-lg">123 Calle del Paraíso,</p>
          <p className="text-lg">San Andrés, Islas, Colombia</p>
        </div>
      </div>
    </div>

      <div className="my-8">
        <h2 className="text-2xl text-gray-700 tracking-wider font-medium">
          Comentarios de los usuarios
        </h2>
        <div className="w-40 h-1 bg-[#17858A] my-2 mx-3"></div>

        {comentarios.length === 0 ? (
          <p>¡No hay comentarios disponibles!</p>
        ) : (
          <>
            {currentComments.map((comentario, index) => {
              const userPhoto = comentario.user?.user_photo;
              const imageUrl = getImageUrl(userPhoto);

              return (
                <div key={index} className="bg-gray-50 p-4 shadow-md mb-4 flex gap-2">
                  <div className="flex justify-center items-center my-3">
                    <Image
                      src={imageUrl}
                      width="40"
                      height="40"
                      alt="User Icon"
                      className="rounded-full m-1"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-normal">{comentario.user.name}</p>
                    <p className="text-lg font-normal">{comentario.comment}</p>
                    <p className="text-gray-700">{comentario.comment_date}</p>
                    <Rating name="read-only" value={comentario.rating} readOnly />
                  </div>
                </div>
              );
            })}
            {/* Paginación */}
            <ul className="flex list-none justify-center">
              {Array.from(
                { length: Math.ceil(comentarios.length / commentsPerPage) },
                (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1 mx-1  ${
                        currentPage === i + 1
                          ? "bg-[#17858A] text-white"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Hotels;
