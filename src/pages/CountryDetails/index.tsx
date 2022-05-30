import { Grid, Container, Typography } from "@mui/material";
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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <img src={country.flags.png} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Native name:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.name.common}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Top Level Domain:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.tld.join(", ")}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Population:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.population}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Currencies:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {Object.values(country.currencies).map(({ name }) => name)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Region:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.region}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Languages:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {Object.values(country.languages)
                    .reduce<string[]>((acc, curr) => [...acc, curr], [])
                    .join(", ")}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Sub Region:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.subregion}
                </Typography>
              </Grid>
              <Grid item xs={6} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  Capital:
                </Typography>
                <Typography variant="subtitle2" component="strong" pr={1}>
                  {country.capital.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CountryDetails;
