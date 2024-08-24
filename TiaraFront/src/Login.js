import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#932F6D",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused fieldset": {
            borderColor: "#932F6D",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#932F6D",
          },
        },
      },
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="parent_div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
          height: "100vh",
        }}
      >
        <FormGroup className="child_form" sx={{ width: "60%" }}>
          <Typography variant="h5">
            Login into <span style={{ color: "#932F6D" }}>MiTiara</span>
          </Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 2 }}></Divider>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{ marginTop: 2 }}
            focused
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ marginTop: 2 }}
            focused
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
              marginBottom: "8px",
              padding: "0px 10px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Keep Me Signed In"
            />
            <Button variant="text" sx={{ textTransform: "none" }}>
              Forgot Password
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ textTransform: "none", flexGrow: 1, borderRadius: "10px" }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                flexGrow: 5,
                marginLeft: 2,
                borderRadius: "10px",
              }}
              disableElevation
            >
              Login In {">"}
            </Button>
          </div>
        </FormGroup>
      </div>
    </ThemeProvider>
  );
}

export default Login;
