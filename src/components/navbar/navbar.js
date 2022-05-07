import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavbarItem } from './navbaritem';


// navbar component to hold navbar items
export const NavBar = (props) => {
    
    return (
        // return list of all pages
        <div className='navbar'>
                <NavbarItem text="Home" link="/" />
                <NavbarItem text="Store" link="/store" />
                <NavbarItem text="About" link="/about" />
                <NavbarItem text="Contact" link="/contact" /> 
        </div>
    )
}