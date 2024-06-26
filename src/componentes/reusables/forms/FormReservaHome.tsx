"use client";

import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface FormReservaHotelProps {
  hotel: string;
  setHotel: (hotel: string) => void;
  arrivalDate: Date | null;
  setArrivalDate: (date: Date | null) => void;
  departureDate: Date | null;
  setDepartureDate: (date: Date | null) => void;
  people: number;
  setPeople: (people: number) => void;
  onBooking: () => void;
}

const FormReservaHotel: React.FC<FormReservaHotelProps> = ({
  hotel,
  setHotel,
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate,
  people,
  setPeople,
  onBooking,
}) => {
  const peopleOptions = [0, 1, 2, 3, 4, 5];

  const handleArrivalDateChange = (newValue: Dayjs | null) => {
    setArrivalDate(newValue ? newValue.toDate() : null);
  };

  const handleDepartureDateChange = (newValue: Dayjs | null) => {
    setDepartureDate(newValue ? newValue.toDate() : null);
  };

  return (
    <Box
      className="bg-white bg-opacity-80 backdrop-blur-lg hover:bg-opacity-95 transition duration-300 ease-in-out p-4 rounded-lg shadow-xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <FormControl variant="outlined" className="w-[20%]" sx={{ backgroundColor: '#F5F5F5' }}>
        <InputLabel id="hotel-label">Hotel</InputLabel>
        <Select
          labelId="hotel-label"
          value={hotel}
          onChange={(e) => setHotel(e.target.value as string)}
          label="Hotel"
        >
          <MenuItem value="hotel1">Aqua Maris - Cartagena</MenuItem>
        </Select>
      </FormControl>

      <DatePicker
        className="w-[30%]"
        label="Llegada"
        value={arrivalDate ? dayjs(arrivalDate) : null}
        onChange={handleArrivalDateChange}
        sx={{ backgroundColor: '#F5F5F5' }}
      />

      <DatePicker
        className="w-[30%]"
        label="Salida"
        value={departureDate ? dayjs(departureDate) : null}
        onChange={handleDepartureDateChange}
        sx={{ backgroundColor: '#F5F5F5' }}
      />

      <FormControl fullWidth variant="outlined" className="w-[20%]" sx={{ backgroundColor: '#F5F5F5' }}>
        <InputLabel id="people-label">Personas</InputLabel>
        <Select
          labelId="people-label"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          label="Personas"
        >
          {peopleOptions.map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box display="flex" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onBooking}
        >
          RESERVAR
        </Button>
      </Box>
    </Box>
  );
};

export default FormReservaHotel;
