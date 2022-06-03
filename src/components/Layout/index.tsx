import { Box, Container, GlobalStyles } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isFrontPage?: boolean;
};

function Layout({ children, isFrontPage }: Props) {
  return (
    <Box>
      <GlobalStyles
        styles={{
          img: { height: "auto", maxWidth: "100%" },
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          paddingY: isFrontPage ? 4 : 5,
          paddingX: 2.5,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
