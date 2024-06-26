"use client";
import React, { useEffect, useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { AppBar, Box, Button, Drawer, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuGeneral from "./MenuGeneral";
import { HiOutlinePhoneIncoming } from "react-icons/hi";

function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "hoteles", path: "/hoteles" },
    { title: "Experiencias", path: "/experiencias" },
    { title: "Aqua Club", path: "/premium" },
  ];

  const navLinkSecond = [
    { title: "home", path: "/" },
    { title: "ingresar", path: "/login" },
  ];

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          height: "auto",
          backgroundColor: scrolled
            ? "rgba(245, 245, 245, 0.9)"
            : "rgba(245, 245, 245, 0.7)",
          boxShadow: "none",
          transition: "background-color 0.3s ease-in-out",
          paddingX: 2,
          paddingY: 1,

          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <IoMdMenu />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { sm: "row" },
              justifyContent: "space-between",
              width: "100%",
            }}
            className="items-center"
          >
            <Box sx={{ marginLeft: 2, marginRight: 2, marginTop: 1 }}>
              <Image src="/logos/logo.svg" alt="Logo" width={140} height={20} />
            </Box>
            <div className="flex items-center gap-4">
              {navLinks.map((item) => (
                <Link href={item.path} passHref key={item.title}>
                  <Button
                    color="primary"
                    className="text-md hover:bg-transparent hover:text-[#184549]"
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <MenuGeneral />
              <IconButton color="primary" size="large">
                <IoSearch />
              </IconButton>
              <Button
                variant="outlined"
                onClick={() => router.push("/carrito")}
                endIcon={<HiOutlinePhoneIncoming />}
                className="px-3"
                sx={{
                  height: '3em',     
                  minWidth: 'auto',  
                }}
              >
                Contacto
              </Button>
            </div>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "row",
              gap: 1,
            }}
          >
            <IconButton color="primary" size="large">
              <IoSearch />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() => router.push("/carrito")}
            >
              <RiShoppingBag4Line />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} navLinkSecond={navLinkSecond} />
      </Drawer>
    </div>
  );
}

export default NavBar;
