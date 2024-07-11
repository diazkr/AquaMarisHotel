'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPercentage, FaCocktail, FaSpa, FaClock } from 'react-icons/fa';
import { Box, Typography, Button, MobileStepper, Paper, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AquaClub: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  
    const items = [
      {
        icon: <FaPercentage className="text-teal-500 text-6xl mx-auto mb-4" />,
        title: "Descuento del 5% en todas las reservas",
        description: `Ser un usuario premium ofrece una serie de ventajas exclusivas que mejoran significativamente la experiencia 
                      en nuestro hotel. Una de las principales ventajas es el descuento del 5% en todas las reservas, lo que permite a 
                      los usuarios premium disfrutar de nuestras lujosas habitaciones y servicios a un precio más accesible. 
                      Este descuento se aplica automáticamente, haciendo que cada estancia sea no solo más cómoda, sino también más 
                      económica.`,
      },
      {
        icon: <FaCocktail className="text-teal-500 text-6xl mx-auto mb-4" />,
        title: "Bebida o cóctel de bienvenida",
        description: `Además, ser un usuario premium otorga acceso a instalaciones exclusivas dentro del hotel. Los huéspedes premium pueden 
                      disfrutar de áreas privadas, como lounges de lujo, piscinas reservadas solo para ellos y gimnasios con equipamiento de 
                      última generación. También tienen prioridad en las reservas de nuestros restaurantes y spas, asegurando que siempre 
                      tengan un lugar en nuestras instalaciones más solicitadas, sin tener que esperar.`,
      },
      {
        icon: <FaSpa className="text-teal-500 text-6xl mx-auto mb-4" />,
        title: "Acceso al spa gratuito",
        description: `Otra de las ventajas de ser un usuario premium es el servicio personalizado. Desde el momento de la llegada, un equipo dedicado 
                      se encargará de satisfacer todas las necesidades y preferencias del huésped, desde arreglos especiales en la habitación hasta 
                      recomendaciones personalizadas sobre actividades locales. Además, los usuarios premium tienen acceso a un servicio de 
                      conserjería 24/7, que puede ayudar con cualquier cosa, desde reservas en restaurantes hasta organizar excursiones. Ser un 
                      usuario premium no solo significa una estancia más cómoda, sino una experiencia de lujo y atención personalizada en cada 
                      detalle.`,
      },
      {
        icon: <FaClock className="text-teal-500 text-6xl mx-auto mb-4" />,
        title: "Acceso a todas las instalaciones a la hora deseada",
      },
    ];
  
    return (
      <div className="mt-12 w-[60%]">
          <Typography variant="h2" className="my-6 text-4xl text-gray-700 tracking-wider font-medium">Beneficios de ser parte de AquaClub</Typography>

          <div className="w-60 h-1 bg-[#17858A] my-6"></div>

          {items.map((item, index) => (
            <Box key={index} textAlign="left" mb={6}>
              {item.icon}
              <Typography variant="h4" className="text-2xl font-bold text-teal-800 mb-2">{item.title}</Typography>
              <Typography className="text-lg mb-4">{item.description}</Typography>
            </Box>
          ))}
            <Box className="mt-8 text-center">
              <Link href='/register'>
                <Button variant="contained" color="primary" className="bg-teal-800 hover:bg-teal-700">
                  Registrarse en el Club
                </Button>
              </Link>
            </Box>
       </div>
    );
  };
  
  export default AquaClub;