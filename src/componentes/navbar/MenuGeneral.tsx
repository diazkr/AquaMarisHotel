"use client";
import { Backdrop, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";

const MenuGeneral = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserName(parsedUserData.name);
      setUserEmail(parsedUserData.email);
      setUserPhoto(parsedUserData.user_photo);
      setUserId(parsedUserData.id);

    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    router.push(path);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div>
      <IconButton color="primary" size="large" onClick={handleClick}>
        <PiUserCircleFill />
      </IconButton>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleClose}
      >
        <div className="flex gap-1 m-1 py-1 mx-4">
          <Image
            src={userPhoto || "/iconos/usuario.png"}
            width="40"
            height="40"
            alt="User Icon"
            className="rounded-full m-1" 
          />
          <div className="p-0 m-0 flex flex-col text-gray-800">
            <p className="font-medium">{userName || "Nombre"}</p>
            <p className="text-xs">{userEmail || "Correo"}</p>
          </div>
        </div>
        <MenuItem
          className="px-8 mx-4 my-2 "
          onClick={() => handleMenuItemClick(`/usuario/${userId}`)}
          sx={{
            border: "1px solid #9ca3af",
          }}
        >
          Mi información
        </MenuItem>
      </Menu>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
        open={isMenuOpen}
        onClick={handleClose}
      />
    </div>
  );
};

export default MenuGeneral;
