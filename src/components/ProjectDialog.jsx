import React from "react";
import { Dialog, Button } from "@mui/material";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import PropTypes from "prop-types"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectDialog(props) {
  const { name, language, frameworks, extras } = props

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  return (<>
    <Button variant="outlined" onClick={handleClickOpen}>
        {name}
    </Button>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      Worked with languages: {language}. Frameworks: {frameworks}. Also {extras}.
    </Dialog>
  
  </>)
}

ProjectDialog.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  frameworks: PropTypes.string.isRequired,
  extras: PropTypes.string.isRequired,
}

export default ProjectDialog;
