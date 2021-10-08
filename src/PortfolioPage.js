import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  IconButton
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocalPhone as PhoneIcon
} from '@mui/icons-material';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { color } from './theme.js';

export const ParticlesCanvas = () => {
  return (
    <canvas className="background" style={{ position: "absolute" }}/>
  )
}

const BusinessCard = ({ profile }) => {

  const ContactInfo = ({icon, link, text}) => {
    return (
      <Box display="flex" alignItems="center">
        <IconButton href={link}>{icon}</IconButton>
        <Typography variant="caption" color={ color.turquoise[900] }>{text}</Typography>
      </Box>
    )
  }

  const Front = ({ profile }) => {
    const {
      name,
      position,
      phoneNumber,
      emailAddress,
      linkedInUrl,
      githubUrl
    } = profile

    return (
      <Card sx={{ width: 275, height: 180 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body1" color={ color.atlantis[900] }>{ name }</Typography>
            <Typography variant="caption" color="text.secondary">{ position }</Typography>
            { phoneNumber &&
            <ContactInfo icon={<PhoneIcon fontSize="small" color="primary"/>} link={`tel:${phoneNumber}`} text={phoneNumber}/>
            }
            { emailAddress &&
            <ContactInfo icon={<EmailIcon fontSize="small" color="primary"/>} link={`mailto:${emailAddress}`} text={emailAddress}/>
            }
            <Box>
              { linkedInUrl && <IconButton href={linkedInUrl} target="_blank"><LinkedInIcon/></IconButton> }
              { githubUrl && <IconButton href={githubUrl} target="_blank"><GitHubIcon/></IconButton> }
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  };

  const Back = () => {
    return (
      <Card sx={{ width: 275, height: 180 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/nc-logo-monogram.png"
          />
        </CardActionArea>
      </Card>
    )
  };

  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="vertical"
      style={{ zIndex: '1' }}
    >
      <FrontSide style={{ boxShadow: '0 0' }}>
        <Back />
      </FrontSide>
      <BackSide style={{ boxShadow: '0 0' }}>
        <Front profile={profile} />
      </BackSide>
    </Flippy>
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