import React from 'react';
import { Link } from 'react-router-dom';


export const NavbarItem = (props) => {
    
    return(
        <Link to={props.link}>
            <div className='navbarItem'>
                <span className='NavbarText'>{props.text}</span>
            </div>
        </Link>
    );
}

