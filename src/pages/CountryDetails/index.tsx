import { Grid, Container, Typography, Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Country } from "../../types";
import Layout from "../../components/Layout";

function CountryDetails() {
  let { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${id.replace(
        "_",
        " "
      )}?fullText=true`
    )
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, []);

  if (!country) return null;
  console.log(country);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ paddingY: 10 }}>
        <Box>
          <Button variant="outlined">Back</Button>
        </Box>
        <Grid container columnSpacing={5} sx={{ paddingY: 10 }}>
          <Grid item xs={6}>
            <Box paddingRight={7}>
              <img src={country.flags.svg} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack justifyContent="center" direction="column" height="100%">
              <Box>
                <Typography variant="h4" component="div" mb={5}>
                  {country.name.common}
                </Typography>
                <Grid container spacing={2} mb={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Native name:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.name.common}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Top Level Domain:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.tld.join(", ")}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Population:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.population}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Currencies:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {Object.values(country.currencies).map(
                        ({ name }) => name
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Region:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.region}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Languages:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {Object.values(country.languages)
                        .reduce<string[]>((acc, curr) => [...acc, curr], [])
                        .join(", ")}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Sub Region:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.subregion}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} />
                </Grid>
                <Grid container spacing={2} mb={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="span" pr={1}>
                      Capital:
                    </Typography>
                    <Typography variant="body2" component="span" pr={1}>
                      {country.capital.join(", ")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} />
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CountryDetails;
