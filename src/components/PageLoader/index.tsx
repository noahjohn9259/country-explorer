import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";

function PageLoader() {
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ paddingY: !smMQ ? 8 : 4 }}
    >
      <CircularProgress />
    </Box>
  );
}

export default PageLoader;
