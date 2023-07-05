import React from 'react';
import { Typography, Stack, Divider, Table, TableContainer, Paper, TableRow, TableCell, TableBody, tableCellClasses } from '@mui/material';
import ProjectDialog from '../components/ProjectDialog';
import MicrosoftStreams from '../projects/MicrosoftStreams';

function ProjectsPage() {
  function createData (name, year, languages, file) {
    return {name, year, languages, file};
  }

  const rows = [
    createData("NeXUS - NRMA", 2022, "Javascript"),
    createData('Microsoft Streams', 2022, 'Python', MicrosoftStreams),
    createData('DungeonMania', 2022, 'Java'),
    createData('LurkForWork', 2023, 'JavaScript, HTML'),
    createData('BigBrain', 2023, 'JavaScript (React), HTML')
  ]

  return (
    <>
      <Stack direction='row' justifyContent='center'>
        <Typography variant='h2'>My Projects!</Typography>
      </Stack>
      <br/>
      <Divider/>
      <br/>
      <Stack direction='row' justifyContent='center'>
        <TableContainer component={Paper} sx={{ maxWidth: 1700, backgroundColor: "#ffe082" }}>
          <Table sx={{ minWidth: 650, [`& .${tableCellClasses.root}`]: {borderBottomColor: "#ffecb3" } }} aria-label="project table">
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Year Created</TableCell>
              <TableCell>Languages Used</TableCell>
              <TableCell>Information</TableCell>
            </TableRow>
            <TableBody>
              {rows.map((row) => (
                  <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align='left'>{row.year}</TableCell>
                    <TableCell align='left'>{row.languages}</TableCell>
                    <TableCell align='left'><ProjectDialog {...row.file} /></TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  )
}

export default ProjectsPage;
