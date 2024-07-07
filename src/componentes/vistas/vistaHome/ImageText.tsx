import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

function ImageText() {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src="https://i.pinimg.com/564x/21/54/a8/2154a8529a089d4351a6dbf402f10677.jpg" // Reemplaza con la URL de la imagen
        alt="Hotel"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h3 className="text-xl mb-2">Nuestros servicios en todo el mundo</h3>
        <h1 className="text-5xl font-bold mb-2">AQUA CLUB</h1>
        <h2 className="text-2xl mb-4">*****</h2>
        <Button
          variant="outlined"
          sx={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
          endIcon={<IoIosArrowRoundForward />}
          disabled
        >
          Conoce los beneficios de unirte!
        </Button>
      </div>
    </div>
  );
}

export default ImageText;
