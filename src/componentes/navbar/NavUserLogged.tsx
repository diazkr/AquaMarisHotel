import React from 'react'
import MenuGeneral from './MenuGeneral'
import CloseSession from '../reusables/botones/CloseSession'

function NavUserLogged() {
  return (
    <div className='flex justify-center items-center'>
        <MenuGeneral/>
        <CloseSession/>


    </div>
  )
}

export default NavUserLogged