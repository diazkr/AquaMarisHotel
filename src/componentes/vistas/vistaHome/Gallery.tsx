import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const images = [
  {
    src: 'https://i.pinimg.com/564x/35/ec/25/35ec257012e49e7bab541c662fb8fa3a.jpg',
    alt: 'Image 1',
    description: 'Spa con rocas vólcanicas',
  },
  {
    src: 'https://i.pinimg.com/564x/65/52/f7/6552f7369542c09096868dab7a9f9997.jpg',
    alt: 'Image 2',
    description: 'Restaurante Gourmet',
  },
  {
    src: 'https://i.pinimg.com/564x/4b/63/90/4b63909116d3824fa9daebb17d112c1e.jpg',
    alt: 'Image 3',
    description: 'Gimnasio y Centro de Fitness',
  },
  {
    src: 'https://i.pinimg.com/564x/e8/6e/11/e86e11d997d054dfaf2b46aed888af95.jpg',
    alt: 'Image 4',
    description: 'Piscina y Zona de Recreación',
  },
  {
    src: 'https://i.pinimg.com/564x/be/5a/4a/be5a4aae17c5b9c60f5c226f03e30608.jpg',
    alt: 'Image 5',
    description: 'Sala de Conferencias y Eventos',
  },
  {
    src: 'https://i.pinimg.com/564x/48/d7/29/48d72978392290fc44846218e66663fc.jpg',
    alt: 'Image 6',
    description: 'Transporte y tours',
  },
];

function Gallery() {
  const [flipped, setFlipped] = useState(Array(images.length).fill(false));

  const handleFlip = (index: number) => {
    setFlipped(flipped.map((f, i) => (i === index ? !f : f)));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: '100%',
              height: '200px',
              cursor: 'pointer',
            }}
            onClick={() => handleFlip(index)}
            
            className=" shadow-lg hover:scale-[0.98] transition-all duration-300"
          >
            <CardMedia
              component="img"
              image={image.src}
              alt={image.alt}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {flipped[index] && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  padding: 2,
                }}
              >
                <Typography variant="body1">{image.description}</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Gallery;
