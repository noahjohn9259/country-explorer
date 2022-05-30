import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Country } from "../../types";
import Layout from "../../components/Layout";
import { useDarkMode } from "../../atoms/darkMode";
import fetchCountries from "../../apis/fetchCountries";

function Home() {
  const history = useHistory();
  const { isLoading, data: countries } = useQuery<Country[]>(
    "countries",
    fetchCountries,
    {
      staleTime: 60000,
    }
  );
  const { darkMode } = useDarkMode();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout isFrontPage>
      <Box sx={{ flexGrow: 1 }}>
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
            <Grid container columnSpacing={12} rowSpacing={4}>
              {countries.map((item) => (
                <Grid key={item.name.common} item xs={3}>
                  <Card sx={{ backgroundColor: darkMode ? "#2B3743" : "#fff" }}>
                    <CardActionArea
                      LinkComponent="a"
                      href={`/country/${item.name.common.replace(" ", "_")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(
                          `/country/${item.name.common.replace(" ", "_")}`
                        );
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="160"
                        image={item.flags.svg}
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
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Home;
