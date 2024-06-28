// src/components/FetchBookingForm.tsx
import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { getMockRooms } from '@/DataBase/MockDataRooms';
import { useRooms } from '@/contextos/RoomContext';
import { useFilters } from '@/contextos/FilterContext';
import dayjs from 'dayjs';
import FormReservaHotel from './FormReservaHome';
import { useRouter } from 'next/navigation';
import { removeEmptyFields } from '@/helpers/removeEmptyFiles';

const FetchBookingForm: React.FC = () => {
  const { hotel, arriveDate, departureDate, people, setFilters } = useFilters();
  const router = useRouter();
  const { setRooms } = useRooms();

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      arriveDate,
      departureDate,
      people,
    }));
  }, [arriveDate, departureDate, people, setFilters]);

  const handleBooking = async () => {
    const bookingData = {
      hotel,
      arrive_date: dayjs(arriveDate).format('YYYY-MM-DD'),
      departure_date: dayjs(departureDate).format('YYYY-MM-DD'),
      people,
    };

    try {
      const bookingDataReady = removeEmptyFields(bookingData);

      console.log(bookingDataReady);
      const rooms = getMockRooms();
      setRooms(rooms);
      router.push('/lista');

      // Descomenta esto para hacer la llamada al backend
      // const response = await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ ...bookingData, filters })
      // });
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const result = await response.json();
      // setRooms(result.rooms);

    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <Container>
      <FormReservaHotel onBooking={handleBooking} />
    </Container>
  );
};

export default FetchBookingForm;
