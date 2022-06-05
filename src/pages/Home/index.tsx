import { useState } from "react";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";
import {
  Box,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Country } from "../../types";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import fetchCountries from "../../apis/fetchCountries";
import { REGIONS } from "../../constants";
import FlagList from "./fragments/FlagList";

function Home() {
  const [region, setRegion] = useState("all");
  const [searchedText, setSearchedText] = useState("");

  const { isLoading, data: countries } = useQuery<Country[]>(
    ["countries", region],
    () => fetchCountries(region)
  );

  const handleSearchText = debounce((text: string) => {
    setSearchedText(text);
  }, 250);

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
              value={region}
              input={<OutlinedInput />}
              onChange={(selected) => setRegion(selected.target.value)}
              renderValue={
                region === "all" ? () => <>Filter by Region</> : () => region
              }
              fullWidth
            >
              <MenuItem value="all">-</MenuItem>
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
          <FlagList searchedText={searchedText} dataset={countries} />
        )}
      </Box>
    </Layout>
  );
}

export default Home;
