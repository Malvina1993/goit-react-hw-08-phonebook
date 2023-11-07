import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { Navigation } from './Navigation/Navigation.js';

import { RegisterPage } from 'pages/RegisterPage.js';
import { LoginPage } from 'pages/LoginPage.js';
import { ContactsPage } from 'pages/ContactsPage.js';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/userReducer.js';

// import { lazy } from 'react';
// const Cast = lazy(() => import('./Cast/Cast.js'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]
    
  )


  return (<div>
    <header>
      <Navigation/>
    </header> 

     <Routes>
            <Route path = "/register" element = {<RegisterPage/>} />
            <Route path = "/login" element = {<LoginPage/>} />
            <Route path = "/contacts" element = {<ContactsPage/>} />
      </Routes>
    
 </div>)
  
};
