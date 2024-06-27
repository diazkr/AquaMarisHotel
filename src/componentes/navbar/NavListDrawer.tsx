import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface NavLink {
  title: string;
  path: string;
}

interface NavListDrawerProps {
  navLinks: NavLink[];
  navLinkSecond: NavLink[];
}

const NavListDrawer: React.FC<NavListDrawerProps> = ({
  navLinks,
  navLinkSecond,
}) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <Link href={item.path} passHref key={item.title}>
              <ListItem disablePadding key={item.title}>
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>

      <Divider />

      <nav>
        <List>
          {navLinkSecond.map((item) => (
            <Link href={item.path} passHref key={item.title}>
              <ListItem disablePadding key={item.title}>
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
