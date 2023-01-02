import { CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';


export const Layout = () => {

  return (
   <Outlet/>
  )
}
