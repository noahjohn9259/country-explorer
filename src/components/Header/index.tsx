import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ paddingX: 0 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
