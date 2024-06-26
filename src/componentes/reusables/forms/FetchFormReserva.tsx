"use client";

import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import FormReservaHotel from './FormReservaHome';
import { getMockRooms } from '@/DataBase/MockDataRooms';
import { useRooms } from '@/contextos/RoomContext';
import { useRouter } from 'next/navigation';



const FetchBookingForm: React.FC = () => {
    const [hotel, setHotel] = useState<string>('');
    const [arrivalDate, setArrivalDate] = useState<Date | null>(new Date());
    const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
    const [people, setPeople] = useState<number>(1);
    const router = useRouter()
    const { setRooms } = useRooms();

  

  const handleBooking = async () => {
    const bookingData = {
      hotel,
      arrivalDate,
      departureDate,
      people
    };

    try {
    console.log(bookingData)
    const rooms = getMockRooms();
    setRooms(rooms);

    //   const response = await fetch('/api/booking', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(bookingData)
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const result = await response.json();
      console.log('Booking successful:', rooms);
      router.push( '/lista');

    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <Container>
        <FormReservaHotel
          hotel={hotel}
          setHotel={setHotel}
          arrivalDate={arrivalDate}
          setArrivalDate={setArrivalDate}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          people={people}
          setPeople={setPeople}
          onBooking={handleBooking}
        />
    </Container>
  );
};

export default FetchBookingForm;
