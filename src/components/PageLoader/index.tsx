import React from "react";
import { Box, CircularProgress } from "@mui/material";

function PageLoader() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
}

export default PageLoader;
