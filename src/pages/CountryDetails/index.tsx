import { ReactNode } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Grid,
  Typography,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Country } from "../../types";
import fetchCountry from "../../apis/fetchCountry";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import BorderCountries from "./fragments/BorderCountries";
import { CustomButton } from "./styled";

type MetaInfo = { label: string; value: ReactNode };

function CountryDetails() {
  let { id } = useParams<{ id: string }>();

  let history = useHistory();
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));
  const { isLoading, data } = useQuery<Country[]>(["country", id], () =>
    fetchCountry(id)
  );

  if (isLoading || !data) return <PageLoader />;
  const country = data[0];

  const leftMetaInfo: MetaInfo[] = [
    {
      label: "Native name:",
      value: country.name.common,
    },
    {
      label: "Population:",
      value: country.population.toString(),
    },
    {
      label: "Region:",
      value: country.region,
    },
    {
      label: "Sub Region:",
      value: country.subregion,
    },
    {
      label: "Capital:",
      value: country.capital?.join(", ") ?? (
        <Typography component="span">-</Typography>
      ),
    },
  ];

  const rightMetaInfo: MetaInfo[] = [
    {
      label: "Top Level Domain:",
      value: country.tld.join(", "),
    },
    {
      label: "Currencies:",
      value: country.currencies ? (
        Object.values(country.currencies)
          .map(({ name }) => name)
          .join(", ")
      ) : (
        <Typography component="span">-</Typography>
      ),
    },
    {
      label: "Languages:",
      value: Object.values(country.languages)
        .reduce<string[]>((acc, curr) => [...acc, curr], [])
        .reverse()
        .join(", "),
    },
  ];

  const contentRender = (data: MetaInfo[]) => {
    return (
      <>
        {data.map(({ label, value }, idx) => (
          <Typography variant="body1" gutterBottom key={idx}>
            <Box sx={{ fontWeight: 600, paddingRight: 0.5 }} component="span">
              {label}
            </Box>
            <Box sx={{ fontWeight: "light" }} component="span">
              {value}
            </Box>
          </Typography>
        ))}
      </>
    );
  };

  return (
    <Layout>
      <Box>
        <CustomButton
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => history.push("/")}
        >
          Back
        </CustomButton>
      </Box>
      <Grid container columnSpacing={{ md: 10 }} sx={{ paddingY: 8 }}>
        <Grid item xs={12} md={6}>
          <Box paddingRight={2}>
            <Box
              sx={{
                height: !smMQ ? 401 : 230,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "#fff",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${country.flags.svg})`,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} paddingTop={{ xs: 8, sm: 0 }}>
          <Stack justifyContent="center" direction="column" height="100%">
            <Box>
              <Typography variant="h5" component="div" mb={4}>
                {country.name.common}
              </Typography>
              <Grid container spacing={{ xs: 6, sm: 2 }} mb={1}>
                <Grid item xs={12} md={6}>
                  {contentRender(leftMetaInfo)}
                </Grid>
                <Grid item xs={12} md={6}>
                  {contentRender(rightMetaInfo)}
                </Grid>
              </Grid>
            </Box>
            <Box paddingTop={{ xs: 6, sm: 6 }}>
              <Box
                sx={{ fontWeight: "bold", paddingRight: 0.5 }}
                display="flex"
                alignItems={{ xs: "flex-start", sm: "center" }}
                component="strong"
                flexDirection={{ xs: "column", sm: "row" }}
              >
                <Box component="span">Border Countries:</Box>
                <Stack
                  direction="row"
                  marginLeft={{ xs: 0, sm: 2 }}
                  marginTop={{ xs: 3, sm: 0 }}
                >
                  <BorderCountries codes={country.borders ?? []} />
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default CountryDetails;
