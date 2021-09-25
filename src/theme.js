import { createTheme } from '@mui/material/styles';

export const color = {
  tangaroa: {
    900: "#001E3C",
    800: "#334B63",
    700: "#5C6F82",
    600: "#7D8C9B",
    500: "#97A3AF",
    400: "#ACB5BF",
    300: "#BDC4CC",
    200: "#CAD0D6",
    100: "#D5D9DE",
    50: "#DDE1E5"
  },
  white: "#FFFFFF"
};

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default theme;