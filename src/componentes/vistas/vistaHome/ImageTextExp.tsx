import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

function ImageTextExp() {
  const router = useRouter();
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src="https://i.pinimg.com/736x/bb/3a/34/bb3a34c27adf897fdc96eabe66f56afc.jpg" // Reemplaza con la URL de la imagen
        alt="Hotel"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h3 className="text-xl mb-2">San Andres Colombia</h3>
        <h1 className="text-5xl font-bold mb-2">AQUA MARIS EXPERIENCES</h1>
        <h2 className="text-2xl mb-4">*****</h2>
        <p className="text-lg mb-3">Adults Recommended</p>
        <Button
          variant="outlined"
          sx={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
          endIcon={<IoIosArrowRoundForward />}
          onClick={()=>(router.push("/experiencias"))}
        >
          Conoce todas las experiencias!
        </Button>
      </div>
    </div>
  );
}

export default ImageTextExp;
