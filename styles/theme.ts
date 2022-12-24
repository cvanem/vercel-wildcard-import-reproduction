import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb'
    },
    secondary: {
      main: '#f97316'
    },
    error: {
      main: red[600]
    }
  }
});

export default theme;
