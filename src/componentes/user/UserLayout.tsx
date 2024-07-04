"use client";
import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  FaClipboardList,
  FaCommentDots,
  FaInfoCircle,
  FaQuestionCircle,
  FaStar,
  FaUserCog,
} from "react-icons/fa";
import UserDetail from "./UserDetail";
import Comentarios from "./Comentarios";
import Premium from "./Premium";
import FAQContent from "./FAQContent";
import { Comentario, UserInterface } from "@/interfaces/UserInterface";
import { getUserData } from "@/DataBase/getUserData";
import Image from "next/image";
import { ReservationInterface } from "@/interfaces/UserInterface";
import ReservationsList from "./ReservationList";
import getReservations from "@/DataBase/ReservationMock";

interface UserLayoutProps {
  id: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ id }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [reservations, setReservations] = useState<ReservationInterface[]>([]);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsData = getReservations();
        setReservations(reservationsData);
        setSelectedContent(<ReservationsList reservations={reservationsData} />);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const menuItems = [
    {
      text: "Reservaciones",
      icon: <FaClipboardList />,
      content: <ReservationsList reservations={reservations} />,
    },
    {
      text: "Información personal",
      icon: <FaInfoCircle />,
      content: user ? (
        <UserDetail
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          country={user.country}
          reservations={user.reservations}
          comentario={user.comentario}
        />
      ) : null,
    },
    {
      text: "Mis comentarios",
      icon: <FaCommentDots />,
      content:
        comentarios.length > 0 ? (
          comentarios.map((comentario, index) => (
            <Comentarios
              key={index}
              userId={comentario.userId}
              roomId={comentario.roomId}
              comment={comentario.comment}
              rating={comentario.rating}
            />
          ))
        ) : (
          <p>No hay comentarios disponibles.</p>
        ),
    },
    { text: "Mi suscripción", content: <Premium />, icon: <FaStar /> },
    {
      text: "Preguntas frecuentes",
      content: <FAQContent />,
      icon: <FaQuestionCircle />,
    },
  ];

  const handleListItemClick = (index: number, content: React.ReactNode) => {
    setSelectedIndex(index);
    setSelectedContent(content);
  };

  return (
    <Box className="flex flex-col justify-center items-center my-4">
      <div className="flex flex-col md:flex-row md:w-3/4 justify-center ">
        <div className="w-[100%] py-2">
          <div className="flex justify-center items-center my-2">
            <Image src="/logos/logo.svg" alt="" width={200} height={200} />
          </div>
          <p className="bg-[#17858A] py-3 text-center text-[#F5F5F5] font-semibold w-full drop-shadow-md">
            Información de usuario
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:w-3/4 ">
        <Box className="md:w-1/3 mr-3 pr-4 bg-white">
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleListItemClick(index, item.content)}
                className={
                  index === selectedIndex
                    ? "selected-item"
                    : "non-selected-item"
                }
              >
                <div className="text-[#17858A] text-xl mr-3">{item.icon}</div>
                <ListItemText primary={item.text} className="ml-0" />
              </ListItem>
            ))}
          </List>
        </Box>
        <div className="md:w-2/3 m-1 flex bg-white md:h-[50vh] border-4 rounded-xl border-[#d9eeed] shadow-lg">
          <div className="drop-shadow-md overflow-y-auto w-full">
            {selectedContent}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserLayout;
