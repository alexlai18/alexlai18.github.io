import React from 'react';
import { Typography, Divider, Box } from '@mui/material';
import headshot from '../images/headshot.jpg';

function AboutMePage() {
  return (
    <>
      <Box sx={{ marginLeft: '25px' }}>
        <Typography variant='h4' >About Me</Typography>
        <br/>
        <Divider orientation="horizontal" variant='fullwidth' />
        <br/>
        <Typography variant='h5'>Overview</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'horizontal' }}>
          <Box>
            <Typography variant='body1'>Hi I'm Alex, and I am a current 3rd Year UNSW student studying Computer Science &#40;Co-op&#41;.</Typography>
            <Typography variant='body1'>As the son of business owners, I understand the importance of technology in allowing individuals to more efficiently perform their tasks. Thus, I am looking to have an impact on the world by building software that allows people to be the best that they can be!</Typography>
            <Typography variant='body1'>I'm constantly trying to upskill myself in both professional development and technical skills. I'm currently the Education Director of a UNSW Student Society, UNSW Management Society. I'm also learning new programming languages such as Javascript &#40;React&#41;, Python, etc.</Typography>
          </Box>
          <Box sx={{ paddingRight: '100px' }}>
            <img src={headshot} alt='headshot' width='250px' height='250px'/>
          </Box>
        </Box>
        <Typography variant='h5'>Hobbies</Typography>
        Write about PCs, Basketball, Helping my parents at the shop!
      </Box>
    </>
  )
}

export default AboutMePage;
