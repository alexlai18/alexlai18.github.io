import React from 'react';
import logo from '../images/logo.png';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <>
          <AppBar position="static" style={{ background: '#b28e59', height: 100, overflow: 'hidden' }}>
            <Toolbar disableGutters>
              <Link to='/' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', paddingLeft: 40, width: '40%' }}>
                <img src={logo} alt='personal-logo' style={{ width: '40%' }}/>
                &nbsp; &nbsp; &nbsp;
              </Link>
            </Toolbar>
          </AppBar>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
    )
}

export default NavBar;
