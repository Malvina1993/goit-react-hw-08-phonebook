import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  NavLink, Outlet } from "react-router-dom";
import { selectIsSignIt, selectUser } from 'redux/author.selectors';

import css from './Navigation.module.css';
import { fetchContacts } from 'redux/contactsReducer';

export const Navigation = () => {
    const authorization = useSelector(selectIsSignIt)
    const user = useSelector(selectUser)
    console.log(user);
    

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchContacts())
    }

    return (
        
        <header>
            <nav>
                {!authorization ? (
                    <div  className={css.linkList}>
                        <NavLink className={css.navLink} to='register' >
                            Register
                        </NavLink>
                        <NavLink className={css.navLink} to='login' >
                            Login
                        </NavLink>
                    </div>) : (
                    <div className={css.linkListCont}>
                        <NavLink className={css.navLinkCont} to='contacts' onClick={handleClick()}>
                            Contacts
                        </NavLink>
                        <UserMenu 
                        email={user.email} 
                        />
                    </div>
                )}
            </nav>
            <Outlet />
        </header>
        
    );
};