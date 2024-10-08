// ProjectDetail.js
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Typography, Box, Grid, Button } from '@mui/material'; // Import Button
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  // Navigate function
  const navigate = useNavigate(); // Initialize useNavigate

  // Project data
  const projectData = {
    TTR: {
      title: "Toontown Rewritten",
      logo: "../assets/TTR.png",
      description: "Developed client and server-side gameplay systems for a large-scale MMO with over 2 million users and thousands of concurrent players. Using Panda3D, Python, and Astron, I implemented game functionality and collaborated with a diverse team to refine game elements, incorporating feedback from players and designers.",
      video: "path/to/ttr_video.mp4",
      skills: [
        { name: "Python", image: "../assets/Python.png" },
        { name: "Panda3D", image: "../assets/Panda3D.png" },
        { name: "Astron", image: "../assets/Astron.png" },
      ],
    },
    ToonTag: {
      title: "Toon Tag Remake",
      logo: "../assets/TTR.png",
      description: "Toon Tag Remake is an exciting reimagination of the classic game, where players can enjoy new features and enhanced graphics.",
      video: "path/to/toontag_video.mp4",
      skills: [
        { name: "Python", image: "public/assets/Python.png" },
        { name: "Unreal", image: "path/to/unreal_icon.png" },
        { name: "C#", image: "path/to/csharp_icon.png" },
      ],
    },
  };

  // Get project ID from URL
  const { projectId } = useParams();
  const project = projectData[projectId];

  // Handle project not found
  if (!project) {
    return <Typography variant="h5" sx={{ textAlign: 'center', py: 5 }}>Project not found.</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 5, backgroundColor: 'background.default', color: 'text.primary' }}>
      <Container component={motion.div} initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}>
        {/* Project Logo Section */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
          <img src={project.logo} alt={project.title} style={{ width: '300px', height: 'auto' }} /> {/* Adjust the width as needed */}
        </Box>
        
        {/* Project Title and Description Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* Project Title Section */}
            <Typography variant="h3" sx={{ mb: 3, textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
              {project.title}
            </Typography>
            {/* Project Description Section */}
            <Typography variant="body1" sx={{ mb: 3 }}>{project.description}</Typography>
            {/* Skills Section - moved below description */}
            <Typography variant="h6" sx={{ mb: 3 }}>Technologies Used:</Typography>
            <Grid container spacing={2}>
              {project.skills.map((skill, index) => (
                <Grid item xs={2} key={index} display="flex" flexDirection="column" alignItems="center">
                  <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px' }} />
                  <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{skill.name}</Typography> {/* Increased size */}
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Video Section */}
          <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
            <video 
              src={project.video} 
              controls 
              style={{ width: '100%', height: 'auto' }} 
            />
          </Grid>
        </Grid>

        {/* Back to Home Button */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
