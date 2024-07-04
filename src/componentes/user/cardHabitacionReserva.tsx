"use client";
import React, { useEffect, useState } from 'react';
import { Habitacion } from "@/interfaces/HabitacionInterface";
import { Button, Popover, Typography } from "@mui/material";
import {
  FaWifi,
  FaTv,
  FaWater,
  FaSnowflake,
  FaFire,
  FaLock,
  FaParking,
  FaCoffee,
  FaIceCream,
  FaHotTub,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import SimpleCarousel from "../lista/CarouselComponent";
import getHabitacion from '@/DataBase/getHabitacionMockeada';

interface CardHabitacionProps {
  id: string;
}

const CardHabitacionReserva: React.FC<CardHabitacionProps> = ({ id }) => {
  const [habitacion, setHabitacion] = useState<Habitacion | null>(null);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchHabitacion = async () => {
      try {
        // const response = await fetch(`/api/habitaciones/${id}`); 
        // const data = await response.json();
        // setHabitacion(data);

        const data = getHabitacion(); // Usa la función para obtener la información de la habitación
        setHabitacion(data);

      } catch (error) {
        console.error('Error fetching habitacion:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabitacion();
  }, [id]);

  const serviceNames: { [key: string]: string } = {
    wifi: "Wi-Fi",
    television: "Televisión",
    seaView: "Vista al mar",
    airConditioning: "Aire acondicionado",
    heater: "Calefacción",
    safeBox: "Caja fuerte",
    parking: "Estacionamiento",
    fridge: "Refrigerador",
    breakfast: "Desayuno",
    jacuzzi: "Jacuzzi",
  };

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    content: string
  ) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(serviceNames[content] || content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const open = Boolean(anchorEl);

  const nameHabitacion = (
    tipo_habitacion: string,
    servicios: string[]
  ): string => {
    let name = `Habitación tipo ${tipo_habitacion}`;

    if (servicios.includes("seaView")) {
      name += " con vista al mar";
    }

    if (tipo_habitacion === "suite" && servicios.includes("jacuzzi")) {
      name = "Suite de lujo con jacuzzi";
    } else if (tipo_habitacion === "deluxe") {
      name = "Habitación Deluxe con todas las comodidades";
    } else if (tipo_habitacion === "double") {
      name = "Habitación Doble perfecta para parejas";
    } else if (tipo_habitacion === "family") {
      name = "Habitación Familiar ideal para grupos grandes";
    }

    return name;
  };

  const capacidadHabitacion = (tipo_habitacion: string): number => {
    switch (tipo_habitacion) {
      case "standar":
        return 2;
      case "double":
        return 2;
      case "deluxe":
        return 3;
      case "suite":
        return 4;
      case "family":
        return 6;
      default:
        return 1; // Valor predeterminado en caso de que el tipo de habitación no coincida
    }
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

  const handleNavigation = () => {
    router.push(`rooms/${id}`);
  };

  const formatPrice = (price: string | number): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const trimmedPrice = priceStr.includes(".")
      ? priceStr.slice(0, -3)
      : priceStr;
    const numberPrice = parseInt(trimmedPrice, 10);
    return numberPrice.toLocaleString("es-ES");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!habitacion) {
    return <p>Habitación no encontrada.</p>;
  }

  return (
    <div className="my-2 border border-gray-300 w-[100%] bg-slate-100">
      <div className="flex rounded-sm gap-4">
        <div className="w-[30%]">
          <SimpleCarousel images={habitacion.images} />
        </div>
        <div className="flex flex-col p-4 gap-1 text-[#07282C]">
          <p className=" text-lg font-medium">
            {nameHabitacion(habitacion.type, habitacion.services)}
          </p>
          <div className="flex space-x-2 text-2xl text-[#17858A] my-3">
            {habitacion.services.map((servicio) => (
              <div
                key={servicio}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-[#d9eeec] hover:scale-95 transition-transform duration-200"
                onClick={(event) => handlePopoverOpen(event, servicio)}
              >
                {renderIcon(servicio)}
              </div>
            ))}
          </div>
          <div className="inline-block">
            <Button
              variant="outlined"
              size="small"
              startIcon={<CiCircleMore />}
              sx={{ width: "auto" }}
              onClick={handleNavigation}
            >
              Información de la habitación
            </Button>
          </div>
        </div>
      </div>
      
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            style: {
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            },
          },
        }}
      >
        <Typography className="p-1 text-sm border border-gray-300 rounded-sm">
          {popoverContent}
        </Typography>
      </Popover>
    </div>
  );
};

export default CardHabitacionReserva;
