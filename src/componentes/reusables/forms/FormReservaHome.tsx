// src/components/FormReservaHotel.tsx
import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mantine/dates";
import { Popover } from "@mantine/core";
import dayjs from "dayjs";
import { useFilters } from "@/contextos/FilterContext";
import { FaRegCalendarAlt } from "react-icons/fa";

interface FormReservaHotelProps {
  onBooking: () => void;
}

const FormReservaHotel: React.FC<FormReservaHotelProps> = ({ onBooking }) => {
  const {
    hotel,
    setHotel,
    arriveDate,
    setArriveDate,
    departureDate,
    setDepartureDate,
    people,
    setPeople,
  } = useFilters();

  const [popoverOpened, setPopoverOpened] = useState(false);
  const peopleOptions = [1, 2, 3, 4, 5, 6];

  const handleDateRangeChange = (range: [Date | null, Date | null]) => {
    setArriveDate(range[0]);
    setDepartureDate(range[1]);
  };

  return (
    <Box
      className="bg-white bg-opacity-80 backdrop-blur-lg hover:bg-opacity-90 transition duration-300 ease-in-out p-4 rounded-lg shadow-xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <FormControl
        variant="outlined"
        className="w-[30%]"
        sx={{ backgroundColor: "#F5F5F5" }}
      >
        <TextField
          label="Hotel"
          variant="outlined"
          value="San Andrés"
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>

      <Popover
        opened={popoverOpened}
        onChange={setPopoverOpened}
        position="bottom"
        withArrow
      >
        <Popover.Target>
          <div className="flex gap-2 w-[100%]">
            <FormControl
              variant="outlined"
              className="w-[100%] p-0 m-0"
              sx={{ backgroundColor: "#F5F5F5" }}
            >
              <InputLabel shrink>Llegada</InputLabel>
              <Box
                className="date-picker-input border border-slate-400 text-gray-700 flex items-center justify-center"
                onClick={() => setPopoverOpened((o) => !o)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <FaRegCalendarAlt className="text-2xl text-gray-500" />

                <span style={{ textAlign: "center", flexGrow: 1 }}>
                  {arriveDate
                    ? dayjs(arriveDate).format("MMM DD, YYYY")
                    : "Selecciona la fecha de llegada"}
                </span>
              </Box>
            </FormControl>
            <FormControl
              variant="outlined"
              className="w-[100%]"
              sx={{ backgroundColor: "#F5F5F5" }}
            >
              <InputLabel shrink>Salida</InputLabel>
              <Box
                className="date-picker-input border border-slate-400 text-gray-700"
                onClick={() => setPopoverOpened((o) => !o)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <FaRegCalendarAlt className="text-2xl text-gray-500" />

                <span style={{ textAlign: "center", flexGrow: 1 }}>
                  {departureDate
                    ? dayjs(departureDate).format("MMM DD, YYYY")
                    : "Selecciona la fecha de salida"}
                </span>
              </Box>
            </FormControl>
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <DatePicker
            type="range"
            numberOfColumns={2}
            value={[arriveDate, departureDate]}
            onChange={handleDateRangeChange}
            minDate={dayjs().toDate()}
            locale="es"
            size="sm"
          />
        </Popover.Dropdown>
      </Popover>

      <FormControl
        fullWidth
        variant="outlined"
        className="w-[20%]"
        sx={{ backgroundColor: "#F5F5F5" }}
      >
        <InputLabel id="people-label">Personas</InputLabel>
        <Select
          labelId="people-label"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          label="Personas"
        >
          {peopleOptions.map((num) => (
            <MenuItem key={num} value={num}>
              {num}
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
          BUSCAR
        </Button>
      </Box>
    </Box>
  );
};

export default FormReservaHotel;
