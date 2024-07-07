"use client";
import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsComponent: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyles = [
    { color: "#ffeb3b" },
    { color: "#8bc34a" },
    { color: "#03a9f4" },
  ];

  const hotel = {
    name: "Hotel Principal",
    description: "Descripción del Hotel",
    link: "https://i.pinimg.com/564x/78/5c/a1/785ca149e53997f6ac70f54d510acdeb.jpg",
    whatsapp: "+123456789",
  };

  const restaurants = [
    {
      name: "La Pizzetta Florio",
      description:
        "Ofrece una experiencia culinaria única con una mezcla de sabores tradicionales y modernos. Nuestro chef galardonado utiliza ingredientes frescos y de alta calidad para crear platos que deleitarán su paladar. ",
      link: "https://i.pinimg.com/564x/1c/5d/2a/1c5d2a4e355588229354561a9b863f0f.jpg",
      whatsapp: "+123456789",
    },
    {
      name: "The Grog",
      description:
        "Ofrece una experiencia culinaria única con una mezcla de sabores tradicionales y modernos. Nuestro chef galardonado utiliza ingredientes frescos y de alta calidad para crear platos que deleitarán su paladar. ",
      link: "https://i.pinimg.com/564x/69/82/1f/69821f0d9cc7aec27b731e32ef70be11.jpg",
      whatsapp: "+123456789",
    },
    {
      name: "Capitan Mandy",
      description:
        "Ofrece una experiencia culinaria única con una mezcla de sabores tradicionales y modernos. Nuestro chef galardonado utiliza ingredientes frescos y de alta calidad para crear platos que deleitarán su paladar. ",
      link: "https://i.pinimg.com/564x/50/fd/b9/50fdb9a0f5a0f6b1bec22507d3962253.jpg",
      whatsapp: "+123456789",
    },
    {
      name: "La Regatta",
      description:
        "Ofrece una experiencia culinaria única con una mezcla de sabores tradicionales y modernos. Nuestro chef galardonado utiliza ingredientes frescos y de alta calidad para crear platos que deleitarán su paladar. ",
      link: "https://i.pinimg.com/564x/da/6b/95/da6b95e247f061b1bf9400ec79f6341c.jpg",
      whatsapp: "+123456789",
    },
  ];

  const activities = [
    {
      name: "Academia de Buceo",
      description: "Embárcate en una aventura submarina inolvidable con nuestro tour de buceo en el arrecife de coral. Descubre la impresionante diversidad de vida marina mientras te sumerges en aguas cristalinas y exploras coloridos corales y peces exóticos.",
      link: "https://i.pinimg.com/564x/2c/c7/10/2cc7104b8a680aeb4350605c2f6223a5.jpg",
      whatsapp: "+123456789",
    },
    {
      name: "Alquiler de Kayak",
      description: "Embárcate en una aventura submarina inolvidable con nuestro tour de buceo en el arrecife de coral. Descubre la impresionante diversidad de vida marina mientras te sumerges en aguas cristalinas y exploras coloridos corales y peces exóticos.",
      link: "https://i.pinimg.com/564x/66/02/90/6602905391766ff31be7ef51f2717dcf.jpg",
      whatsapp: "+123456789",
    },
    {
      name: "Alquiler de Catamarán",
      description: "Embárcate en una aventura submarina inolvidable con nuestro tour de buceo en el arrecife de coral. Descubre la impresionante diversidad de vida marina mientras te sumerges en aguas cristalinas y exploras coloridos corales y peces exóticos.",
      link: "https://i.pinimg.com/736x/aa/1b/5c/aa1b5c62b891f2c0e6bb9ab252a3351e.jpg",
      whatsapp: "+123456789",
    }
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        className="bg-transparent"
        sx={{ boxShadow: "none" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="simple tabs example"
        >
          <Tab
            label="Hotel"
            {...a11yProps(0)}
            sx={
              value === 0 ? { ...tabStyles[0], fontWeight: "bold" } : undefined
            }
          />
          <Tab
            label="Restaurantes"
            {...a11yProps(1)}
            sx={
              value === 1 ? { ...tabStyles[1], fontWeight: "bold" } : undefined
            }
          />
          <Tab
            label="Actividades"
            {...a11yProps(2)}
            sx={
              value === 2 ? { ...tabStyles[2], fontWeight: "bold" } : undefined
            }
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }} color="primary">
            EL MEJOR HOTEL DE LA ISLA!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            El mejor hotel de la zona, con Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt eius, voluptatem officiis
            deserunt quae, officia minus aut deleniti quo ipsam consequuntur
            quasi labore vel tempora ducimus rem nesciunt? Unde, tenetur!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box
              sx={{
                width: "30%",
                height: "160px",
                boxShadow: 3,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src="https://i.pinimg.com/564x/69/7c/3b/697c3bfe65114ff8fb2a33519d656031.jpg"
                alt="Hotel Image 1"
                width={300}
                height={300}
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "160px",
                boxShadow: 3,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src="https://i.pinimg.com/564x/a0/31/41/a03141ce47d75428b213a339b0865409.jpg"
                alt="Hotel Image 2"
                width={300}
                height={300}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "160px",
                boxShadow: 3,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src="https://i.pinimg.com/564x/e6/de/ea/e6deea3433ed6503378449f14d6f86c1.jpg"
                alt="Hotel Image 3"
                width={300}
                height={300}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box sx={{ p: 0 }}>
          {restaurants.map((restaurant, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #e0e0e0",
                "&:before": {
                  display: "none",
                },
              }}
              className="w-[100%]"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: 0,
                  minHeight: "48px",
                  "&.Mui-expanded": { minHeight: "48px" },
                }}
              >
                <Typography>{restaurant.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  className="my-2"
                >
                  <Box
                    sx={{ flex: 1, height: "200px", overflow: "hidden" }}
                    className="rounded shadow-md"
                  >
                    <Image
                      src={restaurant.link}
                      alt={restaurant.name}
                      width={300}
                      height={200}
                      objectFit="cover"
                      objectPosition="center"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 2 }}>
                    <Typography>{restaurant.description}</Typography>
                    <Button
                      startIcon={<FaWhatsapp />}
                      disabled
                      className="my-2"
                      variant="text"
                    >
                      Contacta por Whatsapp
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box sx={{ p: 0 }}>
          {activities.map((a, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #e0e0e0",
                "&:before": {
                  display: "none",
                },
              }}
              className="w-[100%]"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: 0,
                  minHeight: "48px",
                  "&.Mui-expanded": { minHeight: "48px" },
                }}
              >
                <Typography>{a.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  className="my-2"
                >
                  <Box
                    sx={{ flex: 1, height: "200px", overflow: "hidden" }}
                    className="rounded shadow-md"
                  >
                    <Image
                      src={a.link}
                      alt={a.name}
                      width={300}
                      height={200}
                      objectFit="cover"
                      objectPosition="center"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 2 }}>
                    <Typography>{a.description}</Typography>
                    <Button
                      startIcon={<FaWhatsapp />}
                      disabled
                      className="my-2"
                      variant="text"
                    >
                      Contacta por Whatsapp
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
};

export default TabsComponent;
