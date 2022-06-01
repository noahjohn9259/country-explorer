import { Skeleton, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { fetchCountriesByCodes } from "../../../../apis/fetchCountries";
import { Country } from "../../../../types";
import { CustomButton } from "./styled";

type Props = {
  codes: string[];
};

function BorderCountries({ codes }: Props) {
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
    <Stack direction="row" flexWrap="wrap" rowGap={1}>
      {data?.map((item, idx) => (
        <CustomButton key={idx} variant="outlined">
          <Typography variant="body1" component="span">
            {item.name.common}
          </Typography>
        </CustomButton>
      ))}
    </Stack>
  );
}

export default BorderCountries;
