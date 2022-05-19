import React from 'react';
import { Box } from '@material-ui/core';
import { NavbarItem } from './navbaritem';



// navbar component to hold navbar items
export const NavBar = (props) => {
    
    return (
        // return list of all pages
        <div className='navbar'>
                <Box className='top-left-logo-box'><img className='top-left-logo-image' src='./liv-a-little.png' alt="Liv a little logo"></img></Box>
                <NavbarItem text="Home" link="/" />
                <NavbarItem text="Store" link="/store" />
                <NavbarItem text="About" link="/about" />
                <NavbarItem text="Contact" link="/contact" /> 
        </div>
    )
}