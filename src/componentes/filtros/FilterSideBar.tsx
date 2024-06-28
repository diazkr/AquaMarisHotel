import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { useFilters } from "@/contextos/FilterContext";
import { useRooms } from "@/contextos/RoomContext";
import { getMockRoomsFilter } from "@/DataBase/MockDataRoomsFilter";
import dayjs from "dayjs";
import { getMockRooms } from "@/DataBase/MockDataRooms";
import { removeEmptyFields } from "@/helpers/removeEmptyFiles";

const FilterSidebar = () => {
  const {
    filters,
    setFilters,
    resetFilters,
    hotel,
    arriveDate,
    departureDate,
    people,
  } = useFilters();
  const { setRooms } = useRooms();
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleTypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      types: {
        ...prevFilters.types,
        [name]: checked,
      },
    }));
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      services: {
        ...prevFilters.services,
        [name]: checked,
      },
    }));
  };

  const handleFilterButtonClick = async () => {
    try {
      const formattedServices = Object.keys(filters.services)
        .filter((service) => filters.services[service])
        .join(",");

      const formattedTypes = Object.keys(filters.types)
        .filter((type) => filters.types[type])
        .join(",");

      const formattedFilters = {
        arrive_date: dayjs(arriveDate).format("YYYY-MM-DD"),
        departure_date: dayjs(departureDate).format("YYYY-MM-DD"),
        services: formattedServices,
        types: formattedTypes,
        people: people,
      };

      
      const formattedFiltersReady = removeEmptyFields(formattedFilters);
      console.log(formattedFiltersReady);
      const filteredRooms = getMockRoomsFilter(formattedFilters); // Reemplaza esta línea con tu llamada a la API
      setRooms(filteredRooms);

      // Descomenta esto para hacer la llamada al backend
      // const response = await fetch('/api/filterRooms', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(filters)
      // });
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const result = await response.json();
      // setRooms(result.rooms);
    } catch (error) {
      console.error("Filtering failed:", error);
    }
  };

  const handleResetFilter = async () => {
    const bookingData = {
      hotel,
      arrive_date: dayjs(arriveDate).format("YYYY-MM-DD"),
      departure_date: dayjs(departureDate).format("YYYY-MM-DD"),
      people,
    };

    try {
      resetFilters();
      console.log(bookingData);
      const rooms = getMockRooms();
      setRooms(rooms);

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
      console.error("Booking failed:", error);
    }
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border text-gray-600">
      <div className="flex items-center gap-2">
        <div className="text-gray-600">
          <FaSliders />
        </div>
        <Typography className="text-gray-600 text-lg">Filtros</Typography>
      </div>

      <Divider className="w-full my-2" />

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Tipos de habitación</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }} className="flex flex-col">
          <FormControlLabel
            control={
              <Checkbox
                name="standard"
                checked={filters.types.standard}
                onChange={handleTypesChange}
              />
            }
            label="Estándar - 2 personas"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="double"
                checked={filters.types.double}
                onChange={handleTypesChange}
              />
            }
            label="Doble - 2 personas"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="deluxe"
                checked={filters.types.deluxe}
                onChange={handleTypesChange}
              />
            }
            label="Deluxe - 3 personas"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="suite"
                checked={filters.types.suite}
                onChange={handleTypesChange}
              />
            }
            label="Suite - 4 personas"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="family"
                checked={filters.types.family}
                onChange={handleTypesChange}
              />
            }
            label="Familiar - 6 personas"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Servicios</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }} className="flex flex-col">
          <FormControlLabel
            control={
              <Checkbox
                name="wifi"
                checked={filters.services.wifi}
                onChange={handleServiceChange}
              />
            }
            label="Wi-Fi"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="television"
                checked={filters.services.television}
                onChange={handleServiceChange}
              />
            }
            label="Televisión"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="seaView"
                checked={filters.services.seaView}
                onChange={handleServiceChange}
              />
            }
            label="Vista al mar"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="airConditioning"
                checked={filters.services.airConditioning}
                onChange={handleServiceChange}
              />
            }
            label="Aire acondicionado"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="heating"
                checked={filters.services.heating}
                onChange={handleServiceChange}
              />
            }
            label="Calefacción"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="safeBox"
                checked={filters.services.safeBox}
                onChange={handleServiceChange}
              />
            }
            label="Caja fuerte"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="parking"
                checked={filters.services.parking}
                onChange={handleServiceChange}
              />
            }
            label="Estacionamiento"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="fridge"
                checked={filters.services.fridge}
                onChange={handleServiceChange}
              />
            }
            label="Nevera"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="breakfast"
                checked={filters.services.breakfast}
                onChange={handleServiceChange}
              />
            }
            label="Desayuno"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="jacuzzi"
                checked={filters.services.jacuzzi}
                onChange={handleServiceChange}
              />
            }
            label="Jacuzzi"
          />
        </AccordionDetails>
      </Accordion>

      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="contained"
          color="primary"
          endIcon={<TbAdjustmentsSearch />}
          onClick={handleFilterButtonClick}
        >
          Filtrar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleResetFilter}
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
