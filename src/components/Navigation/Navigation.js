import React from 'react';

import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
         <nav>
            <Link className='navLink' to='/register'>
                Register
            </Link>
            <Link className='navLink' to='/login'>
                Login
            </Link>
            <Link className='navLink' to='/contacts'>
                Contacts
            </Link>
        </nav>  
       )
};