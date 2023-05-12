import React, { useEffect } from 'react';
import { orange } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Divider, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function SocialsPage() {
  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

  return (
    <>
      <Stack direction='row' justifyContent='center'>
        <Typography variant='h2'>Connect to me!</Typography>
      </Stack>
      <br/>
      <Divider/>
      <br/>
      <Stack direction='row' justifyContent='center'>
        <Box sx={{ display: 'flex', alignContent: 'center', textAlign: 'center', alignItems: 'center' }}>
          <LinkedInIcon fontSize='large' color="primary" /> &nbsp;&nbsp;&nbsp;<a href="www.linkedin.com/in/alexander-lai-a7a677200/">www.linkedin.com/in/alexander-lai-a7a677200/</a>
        </Box>
      </Stack>
      <br/>
      <Stack direction='row' justifyContent='center'>
        <Box sx={{ display: 'flex', alignContent: 'center', textAlign: 'center', alignItems: 'center' }}>
          <GitHubIcon fontSize='large'/>&nbsp;&nbsp;&nbsp;<a href='https://github.com/alexlai18'>www.github.com/alexlai18</a>
        </Box>
      </Stack>
      <br/>
      <Stack direction='row' justifyContent='center'>
        <Box sx={{ display: 'flex', alignContent: 'center', textAlign: 'center', alignItems: 'center' }}>
          <EmailIcon fontSize='large' color='action'/>&nbsp;&nbsp;&nbsp;alaiier18@gmail.com
        </Box>
      </Stack>

    </>
  )
}

export default SocialsPage;
