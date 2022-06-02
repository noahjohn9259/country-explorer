import { useHistory } from "react-router";
import {
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useQuery } from "react-query";
import { fetchCountriesByCodes } from "../../../../apis/fetchCountries";
import { Country } from "../../../../types";
import { CustomButton } from "./styled";

type Props = {
  codes: string[];
};

function BorderCountries({ codes }: Props) {
  const history = useHistory();
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));
  const { isLoading, data } = useQuery<Country[]>(
    ["country", ...codes],
    () => fetchCountriesByCodes(codes),
    {
      enabled: codes.length > 0,
    }
  );

  if (!isLoading && !data) return <Typography component="span">-</Typography>;

  if (isLoading || !data)
    return (
      <Stack direction="row" marginLeft={2} spacing={2}>
        <Skeleton animation="wave" width={50} height={32} />
        <Skeleton animation="wave" width={50} height={32} />
        <Skeleton animation="wave" width={50} height={32} />
      </Stack>
    );

  return (
    <Stack direction="row" flexWrap="wrap" columnGap={{ xs: 2.5, sm: 1 }}>
      {data?.map((item, idx) => (
        <CustomButton
          key={idx}
          variant="outlined"
          onClick={() => {
            history.push(`/country/${item.name.common.replaceAll(" ", "_")}`);
          }}
          sx={{ marginBottom: 1 }}
        >
          <Typography
            variant="body1"
            component="span"
            fontSize={{ xs: 12, sm: 14 }}
          >
            {item.name.common}
          </Typography>
        </CustomButton>
      ))}
    </Stack>
  );
}

export default BorderCountries;
