import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
export default function Layout() {
  return <>
  <Navbar/>

  <Outlet></Outlet>
  </>
}
