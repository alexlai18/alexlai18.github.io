import React, { useEffect } from 'react';
import { Avatar, Stack, Divider, Typography, Button } from '@mui/material'
import headshot from '../images/headshot.jpg';
import { styled } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';

function FrontPage () {
  const AboutMeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[200],
    '&:hover': {
      backgroundColor: red[300],
    },
    width: '300px',
    height: '50px',
    fontFamily: 'sans-serif',
    fontSize: '15px'
  }));

  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

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
      <Stack display='flex' direction='column' justifyContent='center' alignItems='center'>
        <Typography variant='h4' fontFamily='sans-serif' fontWeight='bold'>Click the button to learn more about me!</Typography>
        <br />
        <br />
        <br />
        <AboutMeButton variant="contained">About Me</AboutMeButton>
      </Stack>
    </>
  )
}

export default FrontPage;
