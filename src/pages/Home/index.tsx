import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Country } from "../../types";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import { useDarkMode } from "../../atoms/darkMode";
import fetchCountries from "../../apis/fetchCountries";
import { REGIONS } from "../../constants";

function Home() {
  const history = useHistory();
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));

  const [countryRecords, setCountryRecords] = useState<Country[]>([]);
  const [answer, setAnswer] = useState("all");
  const [searchedText, setSearchedText] = useState("");

  const { isLoading, data: countries } = useQuery<Country[]>(
    ["countries", answer],
    () => fetchCountries(answer)
  );

  const handleSearchText = debounce((text: string) => {
    const newCountryRecords = (countries ?? []).filter((item) =>
      item.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setCountryRecords(newCountryRecords);
    setSearchedText(text);
  }, 250);

  useEffect(() => {
    handleSearchText(searchedText);
  }, [countries]);
  const { darkMode } = useDarkMode();

  return (
    <Layout isFrontPage>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "flex-start", sm: "space-between" }}
          alignItems="center"
          spacing={2}
        >
          <OutlinedInput
            placeholder="Search for a country..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={(e) => handleSearchText(e.target.value)}
            sx={{ width: 480, maxWidth: "100%" }}
          />
          <Box
            alignSelf="flex-start"
            width={{ xs: 248, sm: 200 }}
            paddingTop={{ xs: 4.25, sm: 0 }}
          >
            <Select
              value={answer}
              input={<OutlinedInput />}
              onChange={(selected) => setAnswer(selected.target.value)}
              renderValue={
                answer === "all" ? () => <>Filter by Region</> : () => answer
              }
              fullWidth
            >
              <MenuItem value="all">All</MenuItem>
              {REGIONS.map((value, idx) => (
                <MenuItem key={idx} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Stack>
        {isLoading || !countries ? (
          <PageLoader />
        ) : (
          <Box>
            <Grid
              marginTop={{ xs: 1, sm: 2 }}
              container
              columnSpacing={{ md: 9.5 }}
              rowSpacing={4}
              justifyContent="center"
            >
              {(countryRecords ?? []).map((item) => (
                <Grid key={item.name.common} item xs={10} sm={10} md={3}>
                  <Card sx={{ backgroundColor: darkMode ? "#2B3743" : "#fff" }}>
                    <CardActionArea
                      href={`/country/${item.name.common.replaceAll(" ", "_")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(
                          `/country/${item.name.common.replaceAll(" ", "_")}`
                        );
                      }}
                    >
                      <Box
                        sx={{
                          height: !smMQ ? 160 : 198,
                          backgroundPosition: "center top",
                          backgroundSize: "cover",
                          backgroundColor: "#fff",
                          backgroundRepeat: "no-repeat",
                          backgroundImage: `url(${item.flags.svg})`,
                        }}
                      />
                      <CardContent sx={{ marginBottom: !smMQ ? 0 : 2 }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "clip",
                            paddingTop: !smMQ ? 0 : 1,
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
        )}
      </Box>
    </Layout>
  );
}

export default Home;
