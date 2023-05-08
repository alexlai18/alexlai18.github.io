import React, { useEffect } from 'react';
import { orange } from '@mui/material/colors';

function ProjectsPage() {
  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

  return (
    <>
    </>
  )
}

export default ProjectsPage;
