import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ElevationScroll from "../ElevationScroll";
import { useDarkMode } from "../../atoms/darkMode";

function Header({ ...otherProps }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <ElevationScroll {...otherProps}>
        <AppBar
          color="inherit"
          position="fixed"
          sx={{ backgroundColor: darkMode ? "#2B3743" : "#fff" }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ paddingX: 0 }}>
              <Typography
                variant="h6"
                marginBottom={0}
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Where in the world?
              </Typography>
              <Button
                disableRipple
                color="inherit"
                startIcon={<DarkModeOutlinedIcon />}
                onClick={toggleDarkMode}
              >
                Dark Mode
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
