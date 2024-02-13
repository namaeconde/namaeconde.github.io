import {Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {color} from "../theme";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LocalPhone as PhoneIcon
} from "@mui/icons-material";
import React from "react";

export const ContactInfo = ({icon, link, text}) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton href={link} aria-label={`${text} Contact Info`}>{icon}</IconButton>
      <Typography variant="caption" color={ color.turquoise[900] }>{text}</Typography>
    </Box>
  )
}

export const Front = ({ profile }) => {
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
            { linkedInUrl && <IconButton href={linkedInUrl} aria-label="LinkedIn URL" target="_blank"><LinkedInIcon/></IconButton> }
            { githubUrl && <IconButton href={githubUrl} aria-label="Github URL" target="_blank"><GitHubIcon/></IconButton> }
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export const Back = () => {
  return (
    <Card sx={{ width: 275, height: 180 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <CardMedia
            alt="NC Logo Monogram"
            component="img"
            image="/nc-logo-monogram.webp"
            style={{ width: 50, height: 50 }}
          />
          <Typography variant="body1" color={ color.atlantis[900] }>Get In Touch</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="caption" color={ color.tangaroa[50] }>
            My inbox is always open.
            <br />
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};