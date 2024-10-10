import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProjectDisplay({ logo, name, image, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const paperStyles = {
    width: '100%',
    maxWidth: 400,
    height: 500,
    position: 'relative',
    transition: 'transform 0.3s, box-shadow 0.3s',
    borderRadius: 2,
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 0 20px rgba(33, 150, 243, 0.8), 0 0 40px rgba(33, 150, 243, 0.6)',
    },
  };

  const backgroundStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    borderRadius: 2,
  };

  const logoStyles = {
    width: 275,
    height: 'auto',
    position: 'absolute',
    top: -50,
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s',
    zIndex: 2,
  };

  return (
    <Paper
      elevation={4}
      sx={paperStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(link)}
    >
      <Box sx={backgroundStyles} />
      <img src={logo} alt={name} style={logoStyles} />
      {/* <Typography variant="h5" sx={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center', marginTop: '50%' }}>
        {name}
      </Typography> */}
    </Paper>
  );
}

export default ProjectDisplay;
