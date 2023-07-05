import React from 'react';
import logo from '../images/logo.png';
import { AppBar, Toolbar, Box, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

function NavBar () {
  const nav = useNavigate();

  return (
    <>
      <AppBar position="static" style={{ background: '#DDA15E', height: 100, overflow: 'hidden' }}>
        <Toolbar disableGutters>
          <Link to='/' style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', paddingLeft: 40, width: '40%' }}>
            <img src={logo} alt='personal-logo' style={{ width: '40%' }}/>
            &nbsp; &nbsp; &nbsp;
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display: 'flex', justifyContent: 'right', paddingRight: 50 }, height: '100%' }}>
            <Button
              key='nav-about-me'
              sx={{ my: 2, color: 'white', display: 'block', paddingRight: '15px', marginBottom: '0', marginTop: '0' }}
              onClick={() => nav('/aboutme')}
            >
              About Me
            </Button>
            <Divider orientation="vertical" flexItem variant='middle'/>
            <Button
              key='nav-projects'
              sx={{ my: 2, color: 'white', display: 'block', paddingRight: '15px', paddingLeft: '15px', marginBottom: '0', marginTop:'0' }}
              onClick={() => nav('/projects')}
            >
              Projects
            </Button>
            <Divider orientation="vertical" flexItem variant='middle' />
            <Button
              key='nav-socials'
              sx={{ my: 2, color: 'white', display: 'block', paddingLeft: '15px', marginBottom: '0', marginTop: '0' }}
              onClick={() => nav('/socials')}
            >
              Lets Connect
            </Button>
          </Box>
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
