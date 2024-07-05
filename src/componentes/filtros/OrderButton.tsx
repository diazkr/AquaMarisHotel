import React, { useState, useEffect } from "react";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { TbArrowsDownUp } from "react-icons/tb";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useFilters } from "@/contextos/FilterContext";
import { useRooms } from "@/contextos/RoomContext";
import dayjs from "dayjs";
import { getMockRoomsFilter } from "@/DataBase/MockDataRoomsFilter";
import { removeEmptyFields } from "@/helpers/removeEmptyFiles";

function OrderButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {
    filters,
    setFilters,
    resetFilters,
    hotel,
    arriveDate,
    departureDate,
    people,
    sort,
    setSort
  } = useFilters();
  const { setRooms } = useRooms();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterButtonClick = async (newSort: string) => {
    try {
      await setSort(newSort);

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
        sort: newSort,
      };

      const bookingDataReady = removeEmptyFields(formattedFilters);
      const params = new URLSearchParams(bookingDataReady).toString();
      console.log(params)
      const url = `${process.env.NEXT_PUBLIC_API_URL}/rooms/filter?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result)
      setRooms(result.allRooms);

    } catch (error) {
      console.error("Filtering failed:", error);
    }
  };

  const handleMenuItemClick = (newSort: string) => {
    handleFilterButtonClick(newSort);
    handleClose(); // Cerrar el menú después de hacer clic
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<TbArrowsDownUp />}
        variant="outlined"
      >
        Ordenar
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("DESC")}>
          <ListItemIcon>
            <FaArrowUp className="text-[#17858A]" />
          </ListItemIcon>
          <ListItemText
            className="text-gray-600"
            primary="Mayor a menor precio"
          />
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("ASC")}>
          <ListItemIcon>
            <FaArrowDown className="text-[#17858A]" />
          </ListItemIcon>
          <ListItemText
            primary="Menor a mayor precio"
            className="text-gray-600"
          />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default OrderButton;
