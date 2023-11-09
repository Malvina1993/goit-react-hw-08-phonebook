import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { Navigation } from './Navigation/Navigation.jsx';

import { RegisterPage } from 'pages/RegisterPage.jsx';
import { LoginPage } from 'pages/LoginPage.jsx';
import { ContactsPage } from 'pages/ContactsPage.jsx';
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


  return (<div style={{ width: '100%'}
}>
    <header>
      <p style={{
        backgroundColor: '#5e5ed4',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 18,
        paddingLeft: 24,
        margin: 0,
}
      } >Phonebook</p>
      <Navigation/>
    </header> 

     <Routes>
      <Route path='goit-react-hw-08-phonebook/'>
        <Route path = "register" element = {<RegisterPage/>} />
        <Route path = "login" element = {<LoginPage/>} />
        <Route path = "contacts" element = {<ContactsPage/>} />
      </Route>
      </Routes>
    
 </div>)
  
};
