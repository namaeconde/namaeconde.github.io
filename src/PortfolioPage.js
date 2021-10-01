import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocalPhone as PhoneIcon
} from '@mui/icons-material';

import { color } from './theme.js';

export const ParticlesCanvas = () => {
  return (
    <canvas className="background" style={{ position: "absolute" }}/>
  )
}

const BusinessCard = ({ profile }) => {
  const {
    name,
    position,
    phoneNumber,
    emailAddress,
    linkedInUrl,
    githubUrl
  } = profile

  return (
    <Card sx={{ width: 275 }} style={{ zIndex: 1 }}>
      <CardContent>
        <Typography variant="body1" color={ color.atlantis[900] }>
          { name }
        </Typography>
        <Typography variant="caption" color="text.secondary">
          { position }
        </Typography>
      </CardContent>
      <CardActions>
        { phoneNumber && <IconButton href={`tel:${phoneNumber}`}><PhoneIcon /></IconButton> }
        { emailAddress && <IconButton href={`mailto:${emailAddress}`}><EmailIcon /></IconButton> }
        { linkedInUrl && <IconButton href={linkedInUrl} target="_blank"><LinkedInIcon/></IconButton> }
        { githubUrl && <IconButton href={githubUrl} target="_blank"><GitHubIcon/></IconButton> }
      </CardActions>
    </Card>
  );
}

export default function PortfolioPage() {
  const [profile] = useState({
    name: "Lunamae Shalom M. Conde",
    position: "Software Engineer",
    phoneNumber: "+639992216589",
    emailAddress: "namaeconde@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/namaeconde",
    githubUrl: "https://github.com/namaeconde"
  })
  return (
    <Box
      display="flex"
      minHeight="100vh"
      bgcolor={ color.tangaroa[900] }
    >
      <Stack spacing={2} margin="0 auto" justifyContent="center">
        <BusinessCard profile={profile}/>
      </Stack>
      <ParticlesCanvas />
    </Box>
  )
}