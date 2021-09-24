import { Box } from '@mui/material';
import { indigo } from '@mui/material/colors'

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
      bgcolor={ indigo[900] }
    >
      <ParticlesCanvas />
    </Box>
  )
}