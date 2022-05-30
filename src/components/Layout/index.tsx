import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header";

type Props = {
  children: ReactNode;
  isFrontPage?: boolean;
};

function Layout({ children, isFrontPage }: Props) {
  return (
    <Box>
      <Header windows={window} />
      <Container maxWidth="lg" sx={{ paddingY: isFrontPage ? 4 : 10 }}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
