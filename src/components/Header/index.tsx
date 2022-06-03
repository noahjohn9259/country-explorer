import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ElevationScroll from "../ElevationScroll";
import { useDarkMode } from "../../atoms/darkMode";

function Header({ ...otherProps }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <ElevationScroll {...otherProps}>
        <AppBar color="inherit" position="fixed">
          <Container maxWidth="lg">
            <Toolbar sx={{ paddingX: 0 }}>
              <Typography
                variant="h6"
                marginBottom={0}
                component="div"
                fontWeight={800}
                fontSize={{ xs: 14, sm: 22 }}
                sx={{ flexGrow: 1 }}
              >
                Where in the world?
              </Typography>
              <Button
                color="inherit"
                variant="text"
                disableRipple
                startIcon={
                  darkMode ? <WbSunnyIcon /> : <DarkModeOutlinedIcon />
                }
                onClick={toggleDarkMode}
                sx={{
                  textTransform: "none",
                }}
              >
                <Box component="span" fontWeight={{ xs: 400, sm: 600 }}>
                  {darkMode ? "Light" : "Dark"} Mode
                </Box>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
