import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';

import {  NavLink } from "react-router-dom";
import { selectIsSignIt, selectUser } from 'redux/author.selectors';

export const Navigation = () => {
    const authorization = useSelector(selectIsSignIt)
    const user = useSelector(selectUser)
    console.log(user)

    return (
        
        <header>
            <nav>
                {!authorization ? (
                    <>
                        <NavLink className='navLink' to='/register'>
                            Register
                        </NavLink>
                        <NavLink className='navLink' to='/login'>
                            Login
                        </NavLink>
                    </>) : (
                    <>
                        <NavLink className='navLink' to='/contacts'>
                            Contacts
                        </NavLink>
                        <UserMenu
                        email={user.email} 
                        />
                    </>
                )}
            </nav>
        </header>
        
    );
};