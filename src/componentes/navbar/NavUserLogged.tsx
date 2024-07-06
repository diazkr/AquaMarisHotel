"use client"
import React, { useEffect, useState } from 'react'
import MenuGeneral from './MenuGeneral'
import CloseSession from '../reusables/botones/CloseSession'
import { Typography } from '@mui/material';


function NavUserLogged() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserName(parsedUserData.name);
    }
  }, []);

  const firstName = userName ? userName.split(' ')[0] : 'Bienvenido';


  return (

    <div className='flex justify-center items-center'>
      <Typography color="primary">{firstName}</Typography>
        <MenuGeneral/>
        <CloseSession/>


    </div>
  )
}

export default NavUserLogged