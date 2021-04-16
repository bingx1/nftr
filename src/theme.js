import { amber, grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// Overwriting core styling taking color from material ui

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: '#ffda99',
    },
    background: {
      paper: amber,
      default: amber,
    },
  },
  typography: {
    fontSize: 14,
  },

  // Overriding Material UI styling
  overrides: {
    // Style sheet name *
    MuiButton: {
      // Name of rule
      text: {
        color: 'white',
      },
    },
  },
});

export default theme;
