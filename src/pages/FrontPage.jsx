import React from 'react';
import { Avatar, Stack, Divider, Typography, Button } from '@mui/material'
import headshot from '../images/headshot.jpg';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function FrontPage () {
  const nav = useNavigate();

  const AboutMeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#d32f2f"),
    backgroundColor: "#ef9a9a",
    '&:hover': {
      backgroundColor: "#e57373",
    },
    width: '300px',
    height: '50px',
    fontFamily: 'sans-serif',
    fontSize: '15px'
  }));

  return (
    <>
      <Stack display='flex' direction='column' justifyContent='center' alignItems='center'>
        <Avatar alt='Alex headshot' src={headshot} sx={{ width: 250, height: 250 }}/>
      </Stack>
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Stack display='flex' direction='column' justifyContent='center' alignItems='center' textAlign='center'>
        <Typography variant='h4' fontFamily='sans-serif' fontWeight='bold'>Click the button to learn more about me!</Typography>
        <br />
        <br />
        <br />
        <AboutMeButton variant="contained" onClick={() => nav('/aboutme')}>About Me</AboutMeButton>
      </Stack>
    </>
  )
}

export default FrontPage;
