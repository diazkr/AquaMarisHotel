import { Typography } from '@mui/material'
import React from 'react'
import { MdErrorOutline } from "react-icons/md";


function ErrorMessage() {
  return (
    <div className='text-gray-300 flex flex-col justify-center items-center gap-2'>
        <div className='text-8xl '><MdErrorOutline />
        </div>
        <p className='text-gray-500 text-center'>Ups... Por el momento no más hay habitaciones disponibles con esas especificaciones</p>
    </div>
  )
}

export default ErrorMessage