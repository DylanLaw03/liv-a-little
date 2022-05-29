import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';



// navbar component to hold navbar items
export const NavBar = (props) => {
  return (
    <Box className='navbar'>

        <Box className='nav-button-box'>
            <Button className='nav-button'
            variant='outlined'>
                <Link to={'./'} className='navLink'>
                    Home
                </Link>
            </Button>
        </Box>

        <Box className='nav-button-box'>
            <Button className='nav-button'
            variant='outlined'>
                <Link to={'./store'} className='navLink'>
                    Store
                </Link>
            </Button>
        </Box>

        <Box className='nav-button-box'>
            <Button className='nav-button'
            variant='outlined'>
                <Link to={'./about'} className='navLink'>
                    About
                </Link>
            </Button>
        </Box>

        <Box className='nav-button-box'>
            <Button className='nav-button'
            variant='outlined'>
                <Link to={'./contact'} className='navLink'>
                    Contact
                </Link>
            </Button>
        </Box>
        
    </Box>

  );
}