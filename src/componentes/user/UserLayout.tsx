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
import ReservationsDetails from "./ReservationsDetails";
import UserDetail from "./UserDetail";
import Comentarios from "./Comentarios";
import Premium from "./Premium";
import FAQContent from "./FAQContent";
import { Comentario, UserInterface } from "@/interfaces/UserInterface";
import { getUserData } from "@/DataBase/getUserData";
import Image from "next/image";
import { ReservationInterface } from "@/interfaces/UserInterface";

interface UserLayoutProps {
  id: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ id }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [ reservations, setReservations ] = useState<ReservationInterface[]>([]);
  const [ comentarios, setComentarios] = useState<Comentario[]>([]);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchedUser = getUserData(id);
    setUser(fetchedUser);  
    setReservations(fetchedUser.reservations || []); 
    setComentarios(fetchedUser.comentario || []);

    setSelectedContent(
      fetchedUser.reservations.length > 0 ? (
        <ReservationsDetails
          reservation_id={fetchedUser.reservations[0].reservation_id}
          userId={fetchedUser.reservations[0].userId}
          roomId={fetchedUser.reservations[0].roomId}
          entry_date={fetchedUser.reservations[0].entry_date}
          departure_date={fetchedUser.reservations[0].departure_date}
          payment_status={fetchedUser.reservations[0].payment_status}
          companions={fetchedUser.reservations[0].companions} 
          setComentarios={setComentarios}
        />
      ) : (
        <p>No hay reservaciones disponibles.</p>
      )
    );
    
  }, [id]);

  const menuItems = [
    {
      text: "Reservaciones",
      icon: <FaClipboardList />,
      content: reservations.length > 0 ? (
        <ReservationsDetails
        reservation_id={reservations[0].reservation_id}
        userId={reservations[0].userId}
        roomId={reservations[0].roomId}
        entry_date={reservations[0].entry_date}
        departure_date={reservations[0].departure_date}
        payment_status={reservations[0].payment_status}
        companions={reservations[0].companions}
        setComentarios={setComentarios}
      />
      ) : null,
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
      content: comentarios.length > 0 ? (
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
                <ListItemText primary={item.text}  className="ml-0"/>
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
