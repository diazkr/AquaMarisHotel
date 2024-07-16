"use client";
import React, { useState } from "react";
import { FaPercentage, FaCocktail, FaSpa, FaClock } from "react-icons/fa";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import LoginPromptModal from "./LoginPromptModal";
import MembershipBenefitsModal from "./MembershipBenefitsModal";
import { MdOutlineDiscount } from "react-icons/md";

import Image from "next/image";

const AquaClub: React.FC = () => {
  const router = useRouter();
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoginPromptOpen(true);
    } else {
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
      if (userData.membership_status === "ACTIVE") {
        setIsBenefitsModalOpen(true);
      } else if (userData.membership_status === "DISABLED") {
        router.push("/paypal");
      }
    }
  };

  const handleLogin = () => {
    setIsLoginPromptOpen(false);
    router.push("/register");
  };

  const benefitImages = [
    "https://i.pinimg.com/564x/af/a8/8f/afa88f97b37a9e8c7e3d73964452a0e5.jpg",
    "https://i.pinimg.com/564x/fa/ae/f0/faaef0d338986cb0bcf83d99d92d6b7d.jpg",
    "https://i.pinimg.com/564x/69/6d/16/696d1605229c2a16abba80b8f70167f9.jpg",
    "https://i.pinimg.com/564x/86/67/e1/8667e1c9d703753bf1bb5bd317c08a4b.jpg",
    "https://i.pinimg.com/564x/0b/b0/7e/0bb07ee1aec87be31e0b9231e0e6ff68.jpg",
    "https://i.pinimg.com/564x/a6/8a/19/a68a1995ff6349972e02af0bd44d18f6.jpg",
  ];

  const items = [
    {
      icon: <FaPercentage className="text-transparent mx-auto mt-2" />,
      title: "Descuento del 5% en todas las reservas",
      description: `Ser un usuario premium ofrece una serie de ventajas exclusivas que mejoran significativamente la experiencia 
                    en nuestro hotel. Una de las principales ventajas es el descuento del 5% en todas las reservas, lo que permite a 
                    los usuarios premium disfrutar de nuestras lujosas habitaciones y servicios a un precio más accesible.`,
    },
    {
      icon: <FaCocktail className="text-[#d9eeec] text-6xl mx-auto mb-4" />,
      title: "Bebida o cóctel de bienvenida",
      description: `Además, ser un usuario premium otorga acceso a instalaciones exclusivas dentro del hotel. Los huéspedes premium pueden 
                    disfrutar de áreas privadas, como lounges de lujo, piscinas reservadas solo para ellos y gimnasios con equipamiento de 
                    última generación. `,
    },
    {
      icon: <FaSpa className="text-[#d9eeec] text-6xl mx-auto mb-4" />,
      title: "Acceso al spa gratuito",
      description: `Otra de las ventajas de ser un usuario premium es el servicio personalizado. Desde el momento de la llegada, un equipo dedicado 
                    se encargará de satisfacer todas las necesidades y preferencias del huésped, desde arreglos especiales en la habitación hasta 
                    recomendaciones personalizadas sobre actividades locales. Además, los usuarios premium tienen acceso a un servicio de 
                    conserjería 24/7, que puede ayudar con cualquier cosa, desde reservas en restaurantes hasta organizar excursiones.`,
    },
  ];

  return (
    <div className="my-12 w-[60%]">
      <Typography
        variant="h2"
        className="my-6 text-4xl text-gray-700 tracking-wider font-medium"
      >
        Beneficios de ser parte de AquaClub
      </Typography>
      <div className="w-60 h-1 bg-[#17858A] my-6"></div>

      <Grid container spacing={2} className="mt-2">
        {benefitImages.map((image, index) => (
          <Grid item xs={4} key={index}>
            <div className="relative overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  className="object-cover transform transition-transform duration-300 hover:scale-105"
                  src={image}
                  alt={`Benefit ${index + 1}`}
                  layout="fill"
                />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      {items.map((item, index) => (
        <Box key={index} textAlign="left" mb={6}>
          {item.icon}
          <Typography
            variant="h4"
            className="text-2xl font-bold text-teal-800 mb-2"
          >
            {item.title}
          </Typography>
          <Typography className="text-lg mb-4">{item.description}</Typography>
        </Box>
      ))}
      <Box className="mt-8 text-center">
        <Button
          variant="contained"
          color="primary"
          className="px-6 shadow-lg"
          size="large"
          onClick={handleRegisterClick}
          endIcon={<MdOutlineDiscount />}
        >
          Activar membresía
        </Button>
      </Box>

      <LoginPromptModal
        open={isLoginPromptOpen}
        handleClose={() => setIsLoginPromptOpen(false)}
        handleLogin={handleLogin}
      />

      <MembershipBenefitsModal
        open={isBenefitsModalOpen}
        handleClose={() => setIsBenefitsModalOpen(false)}
      />
    </div>
  );
};

export default AquaClub;
