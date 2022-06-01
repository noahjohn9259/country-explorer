import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Country } from "../../types";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import { useDarkMode } from "../../atoms/darkMode";
import fetchCountries from "../../apis/fetchCountries";

function Home() {
  const history = useHistory();
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, data: countries } = useQuery<Country[]>(
    "countries",
    fetchCountries
  );
  const { darkMode } = useDarkMode();

  if (isLoading || !countries) return <PageLoader />;

  console.log(countries[0]);

  return (
    <Layout isFrontPage>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <OutlinedInput fullWidth placeholder="Search for a country..." />
          <Box>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              input={<OutlinedInput />}
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
          <Grid
            marginTop={2}
            container
            columnSpacing={{ md: 9.5 }}
            rowSpacing={4}
            // columns={{ xs: 8, sm: 10, md: 12 }}
            justifyContent="center"
          >
            {countries.map((item) => (
              <Grid key={item.name.common} item xs={10} sm={10} md={3}>
                <Card sx={{ backgroundColor: darkMode ? "#2B3743" : "#fff" }}>
                  <CardActionArea
                    href={`/country/${item.name.common.replace(" ", "_")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(
                        `/country/${item.name.common.replace(" ", "_")}`
                      );
                    }}
                  >
                    <Box
                      sx={{
                        height: !smMQ ? 160 : 198,
                        backgroundPosition: "left top",
                        backgroundSize: "cover",
                        backgroundColor: "#fff",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${item.flags.svg})`,
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "clip",
                        }}
                      >
                        {item.name.common}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Population: {item.population}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Region: {item.region}
                      </Typography>
                      <Typography variant="body1">
                        Capital: {item.capital}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
