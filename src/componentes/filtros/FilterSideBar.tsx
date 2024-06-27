import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Divider, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { FaChevronDown } from 'react-icons/fa';
import { FaSliders } from "react-icons/fa6";
import { TbAdjustmentsSearch } from "react-icons/tb";

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    standard: false,
    double: true,
    deluxe: false,
    suite: false,
    family: false,
    services: {
      wifi: false,
      television: false,
      seaView: false,
      airConditioning: false,
      heating: false,
      safeBox: false,
      parking: false,
      fridge: false,
      breakfast: false,
      jacuzzi: false,
    }
  });

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      services: {
        ...prevFilters.services,
        [name]: checked,
      },
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border text-gray-600">
        <div className='flex items-center gap-2'>
            <div className='text-gray-600'><FaSliders /></div>
        <Typography className='text-gray-600 text-lg'>Filtros</Typography>
        </div>
      
      <Divider className='w-full my-2'/>
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ boxShadow: 'none', '&:before': { display: 'none' }, backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Tipos de habitación</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <FormControlLabel
            control={<Checkbox name="standard" checked={filters.standard} onChange={handleCheckboxChange} />}
            label="Estándar - 2 personas"
          />
          <FormControlLabel
            control={<Checkbox name="double" checked={filters.double} onChange={handleCheckboxChange} />}
            label="Doble - 2 personas"
          />
          <FormControlLabel
            control={<Checkbox name="deluxe" checked={filters.deluxe} onChange={handleCheckboxChange} />}
            label="Deluxe - 3 personas"
          />
          <FormControlLabel
            control={<Checkbox name="suite" checked={filters.suite} onChange={handleCheckboxChange} />}
            label="Suite - 4 personas"
          />
          <FormControlLabel
            control={<Checkbox name="family" checked={filters.family} onChange={handleCheckboxChange} />}
            label="Familiar - 6 personas"
          />
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Servicios</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }} className='flex flex-col'>
          <FormControlLabel
            control={<Checkbox name="wifi" checked={filters.services.wifi} onChange={handleServiceChange} />}
            label="Wi-Fi"
          />
          <FormControlLabel
            control={<Checkbox name="television" checked={filters.services.television} onChange={handleServiceChange} />}
            label="Televisión"
          />
          <FormControlLabel
            control={<Checkbox name="seaView" checked={filters.services.seaView} onChange={handleServiceChange} />}
            label="Vista al mar"
          />
          <FormControlLabel
            control={<Checkbox name="airConditioning" checked={filters.services.airConditioning} onChange={handleServiceChange} />}
            label="Aire acondicionado"
          />
          <FormControlLabel
            control={<Checkbox name="heating" checked={filters.services.heating} onChange={handleServiceChange} />}
            label="Calefacción"
          />
          <FormControlLabel
            control={<Checkbox name="safeBox" checked={filters.services.safeBox} onChange={handleServiceChange} />}
            label="Caja fuerte"
          />
          <FormControlLabel
            control={<Checkbox name="parking" checked={filters.services.parking} onChange={handleServiceChange} />}
            label="Estacionamiento"
          />
          <FormControlLabel
            control={<Checkbox name="fridge" checked={filters.services.fridge} onChange={handleServiceChange} />}
            label="Nevera"
          />
          <FormControlLabel
            control={<Checkbox name="breakfast" checked={filters.services.breakfast} onChange={handleServiceChange} />}
            label="Desayuno"
          />
          <FormControlLabel
            control={<Checkbox name="jacuzzi" checked={filters.services.jacuzzi} onChange={handleServiceChange} />}
            label="Jacuzzi"
          />
        </AccordionDetails>
      </Accordion>

      <div className='flex justify-center gap-4 mt-4'>
        <Button variant="contained" color="primary" endIcon={<TbAdjustmentsSearch />}>Filtrar</Button>
        <Button variant="outlined" color="secondary">Limpiar filtros</Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
