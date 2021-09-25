import { Box } from '@mui/material';
import { color } from './theme.js';

export const ParticlesCanvas = () => {
  return (
    <canvas className="background" />
  )
}

export default function PortfolioPage() {

  return (
    <Box
      display="flex"
      minHeight="100vh"
      bgcolor={ color.tangaroa[900] }
    >
      <ParticlesCanvas />
    </Box>
  )
}