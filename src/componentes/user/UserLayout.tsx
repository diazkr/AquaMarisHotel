"use client";
import React, { useState, useEffect } from "react";
import { Box, CircularProgress, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  FaClipboardList,
  FaCommentDots,
  FaInfoCircle,
  FaQuestionCircle,
  FaStar,
  FaUserCog,
} from "react-icons/fa";
import UserDetail from "./UserDetail";
import Premium from "./Premium";
import FAQContent from "./FAQContent";
import { getUserData } from "@/DataBase/getUserData";
import Image from "next/image";
import ReservationsList from "./ReservationList";
import CommentList from "./CommentList";

interface UserLayoutProps {
  id: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ id }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = getUserData();
        setUser(userData);
        setSelectedContent(
          <UserDetail
            id={userData.id}
            name={userData.name}
            email={userData.email}
            phone={userData.phone}
            country={userData.country}
          />
        );

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
      text: "Información personal",
      icon: <FaInfoCircle />,
      content: user ? (
        <UserDetail
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          country={user.country}
        />
      ) : null,
    },
    {
      text: "Reservaciones",
      icon: <FaClipboardList />,
      content: user ? <ReservationsList reservations={user.booking} /> : null,
    },
    {
      text: "Mis comentarios",
      icon: <FaCommentDots />,
      content: user ? <CommentList comments={user.comments} /> : null,

    },
    { text: "Mi suscripción",
      content: user ? <Premium membershipStatus={user.membership_status} /> : null,
     icon: <FaStar /> },
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
      <div className="flex flex-col md:flex-row md:w-10/12 justify-center ">
        <div className="w-[100%] py-2">
          <p className="bg-[#17858A] py-3 text-center text-[#F5F5F5] font-semibold w-full drop-shadow-md">
            Información de usuario
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:w-10/12 ">
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
          {loading ? <CircularProgress /> : selectedContent}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserLayout;
