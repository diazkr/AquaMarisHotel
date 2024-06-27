import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import FormReservaHotel from './FormReservaHome';
import { getMockRooms } from '@/DataBase/MockDataRooms';
import { useRooms } from '@/contextos/RoomContext';
import { useRouter } from 'next/navigation';
import { useFilters } from '@/contextos/FilterContext';
import dayjs from 'dayjs';

const FetchBookingForm: React.FC = () => {
  const [hotel, setHotel] = useState<string>('');
  const [arrive_date, setArrive_date] = useState<Date | null>(new Date());
  const [departure_date, setDeparture_date] = useState<Date | null>(new Date());
  const [people, setPeople] = useState<number>(1);
  const router = useRouter();
  const { setRooms } = useRooms();
  const { filters, setFilters } = useFilters();

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      arrive_date,
      departure_date,
      people
    }));
  }, [arrive_date, departure_date, people, setFilters]);

  const handleBooking = async () => {
    const bookingData = {
      hotel,
      arrive_date: dayjs(arrive_date).format('YYYY-MM-DD'),
      departure_date: dayjs(departure_date).format('YYYY-MM-DD'),
      people
    };

    try {
      console.log(bookingData);
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
      <FormReservaHotel
        hotel={hotel}
        setHotel={setHotel}
        arrivalDate={arrive_date}
        setArrivalDate={setArrive_date}
        departureDate={departure_date}
        setDepartureDate={setDeparture_date}
        people={people}
        setPeople={setPeople}
        onBooking={handleBooking}
      />
    </Container>
  );
};

export default FetchBookingForm;
