'use client'
import React, { useState } from 'react';
import { FaPercentage, FaCocktail, FaSpa, FaClock } from 'react-icons/fa';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import LoginPromptModal from './LoginPromptModal';
import MembershipBenefitsModal from './MembershipBenefitsModal';
import Image from 'next/image';

const AquaClub: React.FC = () => {
  const router = useRouter();
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoginPromptOpen(true);
    } else {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      if (userData.membership_status === 'DISABLED') {
        setIsBenefitsModalOpen(true);
      } else if (userData.membership_status === 'ACTIVE') {
        router.push('/paypal');
      }
    }
  };

  const handleLogin = () => {
    setIsLoginPromptOpen(false);
    router.push('/register');
  };

  const benefitImages = [
    "https://i.pinimg.com/564x/af/a8/8f/afa88f97b37a9e8c7e3d73964452a0e5.jpg",
    "https://i.pinimg.com/564x/69/6d/16/696d1605229c2a16abba80b8f70167f9.jpg",
    "https://i.pinimg.com/564x/0b/b0/7e/0bb07ee1aec87be31e0b9231e0e6ff68.jpg",
    "https://i.pinimg.com/564x/db/9e/d6/db9ed6bc70be744e1a048dac50582d1b.jpg",
    "https://i.pinimg.com/564x/92/04/a2/9204a2521796e523576c4308b0199c35.jpg",
    "https://i.pinimg.com/564x/3e/16/10/3e16108263083f94b37bbae33f0c6a37.jpg",
  ];


  const items = [
    {
      icon: <FaPercentage className="text-transparent mx-auto mt-2" />,
      title: "Descuento del 5% en todas las reservas",
      description: `Ser un usuario premium ofrece una serie de ventajas exclusivas que mejoran significativamente la experiencia 
                    en nuestro hotel. Una de las principales ventajas es el descuento del 5% en todas las reservas, lo que permite a 
                    los usuarios premium disfrutar de nuestras lujosas habitaciones y servicios a un precio más accesible. 
                    Este descuento se aplica automáticamente, haciendo que cada estancia sea no solo más cómoda, sino también más 
                    económica.`,
    },
    {
      icon: <FaCocktail className="text-[#d9eeec] text-6xl mx-auto mb-4" />,
      title: "Bebida o cóctel de bienvenida",
      description: `Además, ser un usuario premium otorga acceso a instalaciones exclusivas dentro del hotel. Los huéspedes premium pueden 
                    disfrutar de áreas privadas, como lounges de lujo, piscinas reservadas solo para ellos y gimnasios con equipamiento de 
                    última generación. También tienen prioridad en las reservas de nuestros restaurantes y spas, asegurando que siempre 
                    tengan un lugar en nuestras instalaciones más solicitadas, sin tener que esperar.`,
    },
    {
      icon: <FaSpa className="text-[#d9eeec] text-6xl mx-auto mb-4" />,
      title: "Acceso al spa gratuito",
      description: `Otra de las ventajas de ser un usuario premium es el servicio personalizado. Desde el momento de la llegada, un equipo dedicado 
                    se encargará de satisfacer todas las necesidades y preferencias del huésped, desde arreglos especiales en la habitación hasta 
                    recomendaciones personalizadas sobre actividades locales. Además, los usuarios premium tienen acceso a un servicio de 
                    conserjería 24/7, que puede ayudar con cualquier cosa, desde reservas en restaurantes hasta organizar excursiones. Ser un 
                    usuario premium no solo significa una estancia más cómoda, sino una experiencia de lujo y atención personalizada en cada 
                    detalle.`,
    },
  ];

  return (
    <div className="my-12 w-[60%]">
      <Typography variant="h2" className="my-6 text-4xl text-gray-700 tracking-wider font-medium">Beneficios de ser parte de AquaClub</Typography>
      <div className="w-60 h-1 bg-[#17858A] my-6"></div>


      <Grid container spacing={2} className="mt-2">
                {benefitImages.map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <div className="relative overflow-hidden rounded-sm">
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
          <Typography variant="h4" className="text-2xl font-bold text-teal-800 mb-2">{item.title}</Typography>
          <Typography className="text-lg mb-4">{item.description}</Typography>
        </Box>
      ))}
      <Box className="mt-8 text-center">
        <Button variant="contained" color="primary"  onClick={handleRegisterClick}>
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
