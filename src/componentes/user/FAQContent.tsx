"use client"
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQContent() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="p-6 mx-auto w-[100%]">

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="subtitle1" className="font-semibold" color="primary">¿Cómo puedo realizar una reserva?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Para realizar una reserva en Aqua Maris, puede visitar nuestro sitio web, seleccionar las fechas de su estadía, elegir el tipo de habitación y seguir las instrucciones para completar la reserva. Si necesita ayuda, puede contactarnos directamente.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="subtitle1" className="font-semibold" color="primary">¿Cuáles son las opciones de pago disponibles?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            En Aqua Maris, aceptamos varias opciones de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. También puede pagar en efectivo en la recepción del hotel. Todos los pagos son seguros y confidenciales.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="subtitle1" className="font-semibold" color="primary">¿El hotel ofrece transporte desde el aeropuerto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Sí, ofrecemos servicio de transporte desde y hacia el aeropuerto por un costo adicional. Puede reservar este servicio al momento de hacer su reserva o contactarnos con anticipación para organizarlo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography variant="subtitle1" className="font-semibold" color="primary">¿Cuál es la política de cancelación del hotel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Nuestra política de cancelación permite cancelaciones gratuitas hasta 48 horas antes de la fecha de llegada. Si cancela después de este período, se aplicará un cargo equivalente a una noche de estancia. Para más detalles, consulte nuestra política de cancelación en el sitio web.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography variant="subtitle1" className="font-semibold" color="primary">¿Qué servicios adicionales ofrece el hotel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Aqua Maris ofrece una variedad de servicios adicionales para su comodidad, incluyendo Wi-Fi gratuito, desayuno buffet, servicio de lavandería, y actividades turísticas. Puede solicitar más información en la recepción durante su estancia.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQContent;
