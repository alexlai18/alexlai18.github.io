import React, { useEffect } from 'react';
import { Typography, Divider, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import headshot from '../images/headshot.jpg';
import pc from '../images/pc.jpg';
import bball from '../images/bball.jpg';
import shop from '../images/shop.jpg';
import { orange } from '@mui/material/colors';

function AboutMePage() {

  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

  const big = useMediaQuery('(min-width: 800px)');

  let page;

  if (big) {
    page =
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginRight: '0' }}>
        <Box sx={{width: '500%' }}>
          <Typography variant='body1'>Hi I'm Alex, and I am a current 3rd Year UNSW student studying Computer Science &#40;Co-op&#41;.</Typography>
          <Typography variant='body1'>I'm currently working at NRMA as a Junior Cloud Engineer.</Typography>
          <Typography variant='body1'>As the son of business owners, I understand the importance of technology in allowing individuals to more efficiently perform their tasks. Thus, I am looking to have an impact on the world by building software that allows people to be the best that they can be!</Typography>
          <Typography variant='body1'>I'm constantly trying to upskill myself in both professional development and technical skills. I'm currently the Education Director of a UNSW Student Society, UNSW Management Society. I'm also learning new programming languages such as Javascript &#40;React&#41;, Python, etc.</Typography>
        </Box>
        <Box sx={{ width: '90%', margin: '10px' }}>
          <img src={headshot} alt='headshot' width='250px'/>
        </Box>
      </Box>
      <Typography variant='h5'>Education</Typography>
      <br/>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{width: '500%' }}>
          <Typography variant='body1'>Currently pursuing a Computer Science (Co-op) Degree at UNSW</Typography>
          <ul>
            <li>Co-op Scholar @ UNSW - Current placement at NRMA</li>
            <li>77 WAM</li>
          </ul>

          <Typography variant='body1'>I graduated Sydney Boys High School in 2020</Typography>
          <ul>
            <li>HSC Premier's Award for All Rounder Excellence</li>
            <li>Played Basketball and Football (soccer) from Year 7 through Year 12</li>
          </ul>
        </Box>
      </Box>
      <br/>
      <Typography variant='h5'>Hobbies</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{width: '500%' }}>
          <Typography variant='body1'>I'm really into PCs, and have built my fair share of them. On the right you can see my playing on my first PC build. I play a lot of video games, mostly FPS shooters such as Valorant and Overwatch.</Typography>
        </Box>
        <Box sx={{ width: '90%', margin: '10px', textAlign: 'center' }}>
          <img src={pc} alt='pc-pic' width='250px'/>
          <Typography variant='caption'>Playing Genshin on my first build</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{width: '500%' }}>
          <Typography variant='body1'>I also like to stay active whilst I'm not playing games or studying/working, as those activities force me to sit in a chair for hours on end.</Typography>
          <Typography variant='body1'>I like to stay active in the gym and also play basketball whenever I have the free time to do so. I play basketball casually with a group of friends every Sunday!</Typography>
        </Box>
        <Box sx={{ width: '99%', margin: '10px', textAlign: 'center' }}>
          <img src={bball} alt='bball-team-pic' width='300px'/>
          <Typography variant='caption'>Me and my social team, Chiggen Tendies</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{width: '500%' }}>
          <Typography variant='body1'>Because my parents work so hard to support me, I'm extremely grateful to them and I try to help out around the shop as much as possible.</Typography>
          <Typography variant='body1'>If I'm not busy with work or study, you can often see me at my parents shop, giving them a break. Please come and support Concord News and Gifts!</Typography>
        </Box>
        <Box sx={{ width: '99%', margin: '10px', textAlign: 'center' }}>
          <img src={shop} alt='me-at-shop' width='300px'/>
          <Typography variant='caption'>Me manning the shop whilst parents are on holidays!</Typography>
        </Box>
      </Box>
    </>
  } else {
    page =
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '0', flexWrap: 'wrap' }}>
        <Box sx={{width: '100%' }}>
          <Typography variant='body1'>Hi I'm Alex, and I am a current 3rd Year UNSW student studying Computer Science &#40;Co-op&#41;.</Typography>
          <Typography variant='body1'>As the son of business owners, I understand the importance of technology in allowing individuals to more efficiently perform their tasks. Thus, I am looking to have an impact on the world by building software that allows people to be the best that they can be!</Typography>
          <Typography variant='body1'>I'm constantly trying to upskill myself in both professional development and technical skills. I'm currently the Education Director of a UNSW Student Society, UNSW Management Society. I'm also learning new programming languages such as Javascript &#40;React&#41;, Python, etc.</Typography>
        </Box>
        <Box sx={{ width: '90%', margin: '10px' }}>
          <img src={headshot} alt='headshot' width='250px'/>
        </Box>
      </Box>
      <Typography variant='h5'>Hobbies</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
        <Box sx={{width: '100%' }}>
          <Typography variant='body1'>I'm really into PCs, and have built my fair share of them. On the right you can see my playing on my first PC build. I play a lot of video games, mostly FPS shooters such as Valorant and Overwatch.</Typography>
        </Box>
        <Box sx={{ width: '90%', margin: '10px', textAlign: 'center' }}>
          <img src={pc} alt='pc-pic' width='250px'/>
          <Typography variant='caption'>Playing Genshin on my first build</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
        <Box sx={{width: '100%' }}>
          <Typography variant='body1'>I also like to stay active whilst I'm not playing games or studying/working, as those activities force me to sit in a chair for hours on end.</Typography>
          <Typography variant='body1'>I like to stay active in the gym and also play basketball whenever I have the free time to do so. I play basketball casually with a group of friends every Sunday!</Typography>
        </Box>
        <Box sx={{ width: '99%', margin: '10px', textAlign: 'center' }}>
          <img src={bball} alt='bball-team-pic' width='300px'/>
          <Typography variant='caption'>Me and my social team, Chiggen Tendies</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
        <Box sx={{width: '100%' }}>
          <Typography variant='body1'>Because my parents work so hard to support me, I'm extremely grateful to them and I try to help out around the shop as much as possible.</Typography>
          <Typography variant='body1'>If I'm not busy with work or study, you can often see me at my parents shop, giving them a break. Please come and support Concord News and Gifts!</Typography>
        </Box>
        <Box sx={{ width: '99%', margin: '10px', textAlign: 'center' }}>
          <img src={shop} alt='me-at-shop' width='300px'/>
          <Typography variant='caption'>Me manning the shop whilst parents are on holidays!</Typography>
        </Box>
      </Box>
    </>
  }

  return (
    <>
      <Box id='large-screen' sx={{ marginLeft: '25px' }}>
        <Typography variant='h4' >About Me</Typography>
        <br/>
        <Divider orientation="horizontal" variant='fullwidth' />
        <br/>
        <Typography variant='h5'>Overview</Typography>
        {page}
      </Box>
    </>
  )
}

export default AboutMePage;
