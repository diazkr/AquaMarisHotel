'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getMockRooms } from '@/DataBase/MockDataRooms';
import { Habitacion } from '@/interfaces/HabitacionInterface';
import Modal from 'react-modal';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // habitación respecto a su id
  const room = getMockRooms().find((room) => room.id === id) as Habitacion;

  if (!room) {
    return <div>Habitación no encontrada</div>;
  }

  

  return (
    <div className="container mx-auto p-4 bg-neutral-100 mt-14">
      {/* <h1 className="text-3xl font-bold mb-4 text-primary text-center">{room.type} Room</h1> */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image src={room.images[0]} alt="Main view" width={800} height={600} className="rounded-lg w-full h-full" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {room.images.slice(1,4).map((image, index) => (
              <Image key={index} src={image} alt={"view"} width={400} height={300} className="rounded-lg w-full h-full" />
            ))}
            <div className="relative">
              <Image src={room.images[4]} alt="View 5" width={400} height={300} className="rounded-lg w-full h-auto" />
              <button
                className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-lg"
                onClick={openModal}
              >
                Ver más fotos
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="md:col-start-2 space-y-4">
            <div className="p-6 rounded-lg shadow-md bg-white">
              <p className="text-2xl font-bold mb-2 text-primary">{room.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">Precio</span>
                  <span className="ml-2 text-gray-500">${room.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">Estado</span>
                  <span className="ml-2 text-gray-500">{room.state}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">Número de habitación</span>
                  <span className="ml-2 text-gray-500">{room.roomNumber}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">Servicios</span>
                  <span className="ml-2 text-gray-500">{room.services.join(', ')}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
              Reservar
            </button>
          </div>
        </div>
      </div>
      <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Ver más fotos"
                className="modal"
                overlayClassName="overlay"
            >
                {room.images.length >= 6 ? (
                    <Image src={room.images[5]} alt="View 6" width={400} height={300} className="rounded-lg w-full h-auto" />
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-gray-600 text-xl">No hay más fotos</p>
                    </div>
                )}
                <button onClick={closeModal} className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
                    Cerrar
                </button>
            </Modal>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ver más fotos"
        className="modal"
        overlayClassName="overlay"
      >
        <Image src={room.images[2]} alt="View 6" width={400} height={300} className="rounded-lg w-full h-auto" />
        <button onClick={closeModal} className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
          Cerrar
        </button>
      </Modal> */}
    </div>
  );
};

export default Page;