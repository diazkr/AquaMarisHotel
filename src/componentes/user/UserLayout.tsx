import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  FaClipboardList,
  FaCommentDots,
  FaInfoCircle,
  FaQuestionCircle,
  FaStar,
} from "react-icons/fa";
import UserDetail from "./UserDetail";
import Premium from "./Premium";
import FAQContent from "./FAQContent";
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
  const [updatingReservations, setUpdatingReservations] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await response.json();
      setUser(userData);
      setSelectedContent(
        <UserDetail
          id={userData.id}
          name={userData.name}
          email={userData.email}
          phone={userData.phone}
          country={userData.country}
          photo={userData.user_photo}
        />
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleUpdateReservations = async () => {
    setUpdatingReservations(true);
    await fetchData();
    setSelectedContent(
      <ReservationsList
        reservations={user?.booking ?? []}
        onUpdate={handleUpdateReservations}
        onUpdateReservationStatus={updateReservationStatus}
      />
    );
    setUpdatingReservations(false);
  };

  const updateReservationStatus = (reservationId: string, status: string) => {
    setUser((prevUser: any) => {
      const updatedBookings = prevUser.booking.map((reservation: any) =>
        reservation.id === reservationId
          ? { ...reservation, paymentStatus: status }
          : reservation
      );
      return { ...prevUser, booking: updatedBookings };
    });
  };

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
          photo={user.user_photo}
        />
      ) : null,
    },
    {
      text: "Reservaciones",
      icon: <FaClipboardList />,
      content: user ? (
        updatingReservations ? (
          <div className="flex justify-center items-center h-full">
            <CircularProgress sx={{ color: "gray" }} />
          </div>
        ) : (
          <ReservationsList
            reservations={user.booking}
            onUpdate={handleUpdateReservations}
            onUpdateReservationStatus={updateReservationStatus}
          />
        )
      ) : null,
    },
    {
      text: "Mis comentarios",
      icon: <FaCommentDots />,
      content: user ? <CommentList id={id} /> : null,
    },
    {
      text: "Mi suscripción",
      content: user ? (
        <Premium userId={user.id} />
      ) : null,
      icon: <FaStar />,
    },
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
        <div className="md:w-2/3 m-1 flex bg-white md:h-[50vh] border border-gray-200 shadow-lg">
          <div className="drop-shadow-md overflow-y-auto w-full">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <CircularProgress sx={{ color: "gray" }} />
              </div>
            ) : (
              selectedContent
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserLayout;
