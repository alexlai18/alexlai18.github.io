import React, { useEffect } from 'react';
import { orange } from '@mui/material/colors';

function ProjectsPage() {
  useEffect(() => {
    const colour = orange[100];
    document.body.style.backgroundColor = colour;
  }, []);

  return (
    <>
      Should write about UNSW projects like Microsoft Streams, DungeonMania, Lurkforwork
      Do a little dialog thing to showcase this
    </>
  )
}

export default ProjectsPage;
