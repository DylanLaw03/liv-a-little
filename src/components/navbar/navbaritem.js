import React from 'react';
import { Link } from 'react-router-dom';

// builds navbar items for navbar
export const NavbarItem = (props) => {
    return(
        <Link to={props.link} className='navLink'>
            {props.text}
        </Link>
    );
}

