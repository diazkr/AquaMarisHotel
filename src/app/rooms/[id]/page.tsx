'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';
import { Habitacion } from '@/interfaces/HabitacionInterface';
import { FaWifi, FaTv, FaWater, FaSnowflake, FaFire, FaLock, FaParking, FaCoffee, FaIceCream, FaHotTub } from "react-icons/fa";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useFilters } from "@/contextos/FilterContext";
import { Popover } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import dayjs from 'dayjs';
import { addDays } from 'date-fns'; //para el calendario
import RoomComments from '@/componentes/comment/comment'; //para los comentarios

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();
  const [room, setRoom] = useState<Habitacion | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { arriveDate, setArriveDate, departureDate, setDepartureDate } =
    useFilters();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [occupiedDates, setOccupiedDates] = useState<Date[]>([]);//calendario
  const [commentsModalIsOpen, setCommentsModalIsOpen] = useState(false);

  

  useEffect(() => {
    localStorage.setItem("rommUUID", id);
  }, [id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openCommentsModal = () => setCommentsModalIsOpen(true);
  const closeCommentsModal = () => setCommentsModalIsOpen(false);

  const handleReserveClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/payment");
    } else {
      openDialog();
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const renderIcon = (servicio: string) => {
    switch (servicio) {
      case "wifi":
        return <FaWifi key={servicio} />;
      case "television":
        return <FaTv key={servicio} />;
      case "seaView":
        return <FaWater key={servicio} />;
      case "airConditioning":
        return <FaSnowflake key={servicio} />;
      case "heater":
        return <FaFire key={servicio} />;
      case "safeBox":
        return <FaLock key={servicio} />;
      case "parking":
        return <FaParking key={servicio} />;
      case "fridge":
        return <FaCoffee key={servicio} />;
      case "breakfast":
        return <FaIceCream key={servicio} />;
      case "jacuzzi":
        return <FaHotTub key={servicio} />;
      default:
        return null;
    }
  };

  const renderTextEspanol = (servicio: string) => {
    switch (servicio) {
      case "wifi":
        return "WiFi";
      case "television":
        return "Televisión";
      case "seaView":
        return "Vista al mar";
      case "airConditioning":
        return "Aire acondicionado";
      case "heater":
        return "Calefacción";
      case "safeBox":
        return "Caja fuerte";
      case "parking":
        return "Estacionamiento";
      case "fridge":
        return "Refrigerador";
      case "breakfast":
        return "Desayuno";
      case "jacuzzi":
        return "Jacuzzi";
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`
        );
        if (!response.ok) {
          throw new Error('la petición no es correcta');
        }
        const data = await response.json();

        localStorage.setItem("roomPrice", data.price);
        localStorage.setItem('roomDescription', data.description);
        localStorage.setItem('roomServices', JSON.stringify(data.services));
        localStorage.setItem('roomImages', JSON.stringify(data.images));
        localStorage.setItem('roomType', JSON.stringify(data.type));
        
        setRoom(data);

        // fechas para el calendario
        const bookings = data.bookings;
        const occupied = bookings.flatMap((booking: any) => {
          const checkInDate = addDays( new Date(booking.check_in_date),1);
          const checkOutDate = addDays( new Date(booking.check_out_date),1);
          const dates = [];
          for (let d = checkInDate; d <= checkOutDate; d.setDate(d.getDate() +1)) {
            dates.push(new Date(d));
          }
          return dates;
        });
        setOccupiedDates(occupied);
      } catch (error) {
        console.error('Fallo en la petición', error);
      }
    };

    fetchRoom();
  }, [id]);

  if (!room) {
    return <div>Habitación no encontrada</div>;
  }

  const handleDateRangeChange = (range: [Date | null, Date | null]) => {
    setArriveDate(range[0]);
    setDepartureDate(range[1]);
  };

  return (
    <div className="container mx-auto p-4 mt-14">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src={room.images[0]}
              alt="Main view"
              width={800}
              height={600}
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {room.images.slice(1, 4).map((image, index) => (
              <Image key={index} src={image} alt="View" width={400} height={300} className="rounded-lg w-full h-full" />
            ))}
            <div className="relative">
              <Image
                src={room.images[4]}
                alt="View 5"
                width={400}
                height={300}
                className="rounded-lg w-full h-full"
              />
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
              <p className="text-2xl font-bold mb-2 text-primary">
                {room.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">
                    Precio
                  </span>
                  <span className="ml-2 text-gray-500">${room.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-600">
                    Número de habitación
                  </span>
                  <span className="ml-2 text-gray-500">{room.roomNumber}</span>
                </div>
                <div className="flex">
                  <span className="text-lg font-semibold text-gray-600">Servicios</span>
                  <span className="ml-2 text-gray-500">{room.services.map((servicio) => renderTextEspanol(servicio)).join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex space-x-2 text-2xl text-[#17858A] my-3">
                    {room.services.map((servicio) => (
                      <div
                        key={servicio}
                        className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-[#d9eeec] hover:scale-95 transition-transform duration-200"
                      >
                        {renderIcon(servicio)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Popover
              opened={popoverOpened}
              onChange={setPopoverOpened}
              position="bottom"
              withArrow
            >
              <Popover.Target>
                <button
                  className="w-full py-2 px-4 rounded-lg"
                  onClick={() => setPopoverOpened((o) => !o)}
                  disabled
                >
                  Calendario 📅
                </button>
              </Popover.Target>
              <Popover.Dropdown>
                <DatePicker
                  type="range"
                  value={[arriveDate, departureDate]}
                  onChange={handleDateRangeChange}
                  minDate={new Date()}
                  excludeDate={(date) =>
                    occupiedDates.some(
                      (occupiedDate) =>
                        occupiedDate.getFullYear() === date.getFullYear() &&
                        occupiedDate.getMonth() === date.getMonth() &&
                        occupiedDate.getDate() === date.getDate()
                    )
                  }
                  classNames={{ day: "rounded-full" }}
                />
              </Popover.Dropdown>
            </Popover>
            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500" onClick={openCommentsModal}>
              Ver comentarios 🌟
            </button>
            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500" onClick={handleReserveClick}>
              RESERVAR 🏨 
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
        <div className="image-scroll-container">
          {room.images.length >= 6 ? (
            room.images
              .slice(5)
              .map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt="View 6"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-600 text-xl">No hay más fotos</p>
            </div>
          )}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500"
        >
          Cerrar
        </button>
      </Modal>

      <Modal
        isOpen={commentsModalIsOpen}
        onRequestClose={closeCommentsModal}
        contentLabel="Ver comentarios"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="comments-scroll-container">
          <RoomComments roomId={id} />
        </div>
        <button onClick={closeCommentsModal} className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500">
          Cerrar
        </button>
      </Modal>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Inicio de sesión requerido</DialogTitle>
        <DialogContent>
          Debes iniciar sesión para poder realizar una reservación.
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page;
