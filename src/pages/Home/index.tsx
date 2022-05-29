import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { Country } from "../../types";
import { Link } from "react-router-dom";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    boxShadow: theme.shadows[8],
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(4),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  console.log(countries[0]);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fafafa" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <TextField hiddenLabel id="outlined-basic" label="Outlined" />
          <Box>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Filter by Region"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Box>
          <Grid container columnSpacing={12}>
            {countries.map((item) => (
              <Grid id={item.name.common} item xs={3}>
                <Link to={`/country/${item.name.common}`}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.flags.png}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography variant="h6" component="h6">
                          {item.name.common}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <Typography
                            variant="subtitle2"
                            component="strong"
                            pr={1}
                          >
                            Population:
                          </Typography>
                          <Typography variant="body2" component="span">
                            {item.population}
                          </Typography>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <Typography
                            variant="subtitle2"
                            component="strong"
                            pr={1}
                          >
                            Region:
                          </Typography>
                          <Typography variant="body2" component="span">
                            {item.population}
                          </Typography>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <Typography
                            variant="subtitle2"
                            component="strong"
                            pr={1}
                          >
                            Capital:
                          </Typography>
                          <Typography variant="body2" component="span">
                            {item.population}
                          </Typography>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
