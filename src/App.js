import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import PortfolioPage from "./PortfolioPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioPage />
    </ThemeProvider>
  );
}