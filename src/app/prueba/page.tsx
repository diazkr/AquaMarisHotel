"use client";
import React from "react";
import { useAuth } from "@/contextos/AuthContex";
import { Typography, Box, Avatar } from "@mui/material";

const UserProfilePage: React.FC = () => {
  const { userData } = useAuth();

  if (!userData) {
    return <Typography className="m-24">No estás logueado.</Typography>;
  }

  return (
    <Box className="flex flex-col items-center m-24">
      {userData.name}
      {}
    </Box>
  );
};

export default UserProfilePage;
