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
  atlantis: {
    900: "#A6E22E",
    800: "#B8E858",
    700: "#C6ED79",
    600: "#D1F194",
    500: "#DAF4A9",
    400: "#E1F6BA",
    300: "#E7F8C8",
    200: "#ECF9D3",
    100: "#F0FADC",
    50: "#F3FBE3"
  },
  turquoise: {
    900: "#66D9EF"
  },
  black: {
    900: "#27282c"
  },
  white: "#FFFFFF"
};

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    "fontFamily": `"Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"`
  }
});

export default theme;