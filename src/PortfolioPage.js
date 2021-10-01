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

const BusinessCard = () => {
  return (
    <Card sx={{ width: 275 }} style={{ zIndex: 1 }}>
      <CardContent>
        <Typography variant="body1" color={ color.atlantis[900] }>
          Lunamae Shalom M. Conde
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Software Engineer
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href="tel:+6399992216589"><PhoneIcon /></IconButton>
        <IconButton href="mailto:namaeconde@gmail.com"><EmailIcon /></IconButton>
        <IconButton href="https://www.linkedin.com/in/namaeconde" target="_blank"><LinkedInIcon /></IconButton>
        <IconButton href="https://github.com/namaeconde" target="_blank"><GitHubIcon /></IconButton>
      </CardActions>
    </Card>
  );
}

export default function PortfolioPage() {

  return (
    <Box
      display="flex"
      minHeight="100vh"
      bgcolor={ color.tangaroa[900] }
    >
      <Stack spacing={2} margin="0 auto" justifyContent="center">
        <BusinessCard />
      </Stack>
      <ParticlesCanvas />
    </Box>
  )
}