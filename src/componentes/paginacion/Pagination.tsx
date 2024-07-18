"use client";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { removeEmptyFields } from '@/helpers/removeEmptyFiles';
import { useFilters } from '@/contextos/FilterContext';
import { useRooms } from '@/contextos/RoomContext';
import dayjs from 'dayjs';

export default function PaginationControlled() {
  const { filters, hotel, arriveDate, departureDate, people, sort, page, setPage, totalPage, setTotalPage } = useFilters();
  const { setRooms } = useRooms();

  const fetchRooms = async (newPage: number) => {
    try {
      console.log("Fetching rooms for page:", newPage);
      const formattedServices = Object.keys(filters.services || {})
        .filter((service) => filters.services[service])
        .join(",");

      const formattedTypes = Object.keys(filters.types || {})
        .filter((type) => filters.types[type])
        .join(",");

      const formattedFilters = {
        arrive_date: dayjs(arriveDate).format("YYYY-MM-DD"),
        departure_date: dayjs(departureDate).format("YYYY-MM-DD"),
        services: formattedServices,
        types: formattedTypes,
        people: people,
        sort: sort,
        page: newPage,
      };

      const bookingDataReady = removeEmptyFields(formattedFilters);
      const params = new URLSearchParams(bookingDataReady).toString();
      console.log('Query Params:', params);
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
      console.log('API Result:', result);

      setRooms(result.allRooms);

      setTotalPage(result.totalPages)
      console.log("total de las paginas", totalPage)
      
    } catch (error) {
      console.error("Fetching rooms failed:", error);
    }
  };

  React.useEffect(() => {
    console.log("Page state updated to:", page);
    fetchRooms(page);
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("Page changed to:", value);
    setPage(value); // Update the page state in context
  };

  return (
    <Stack spacing={2} className='mt-24'>
      <Pagination color='primary' count={totalPage} page={page} onChange={handleChange} />
    </Stack>
  );
}
