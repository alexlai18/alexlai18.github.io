import React, { useEffect } from 'react';
import { orange } from '@mui/material/colors';
import { Typography, Stack, Divider, Table, TableContainer, Paper, TableRow, TableCell, TableBody } from '@mui/material';

function ProjectsPage() {
  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

  rows = [
  ]

  return (
    <>
      <Stack direction='row' justifyContent='center'>
        <Typography variant='h2'>My Projects!</Typography>
      </Stack>
      <br/>
      <Divider/>
      <br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="project table">
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Year Created</TableCell>
            <TableCell>Languages Used</TableCell>
          </TableRow>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>

      Should write about UNSW projects like Microsoft Streams, DungeonMania, Lurkforwork
      Do a little dialog thing to showcase this
    </>
  )
}

export default ProjectsPage;
