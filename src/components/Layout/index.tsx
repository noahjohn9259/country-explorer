import { Box, Container, GlobalStyles } from "@mui/material";
import { ReactNode } from "react";
import { useDarkMode } from "../../atoms/darkMode";

type Props = {
  children: ReactNode;
  isFrontPage?: boolean;
};

function Layout({ children, isFrontPage }: Props) {
  const { darkMode } = useDarkMode();
  const pageBgColor = isFrontPage ? "#fafafa" : "#fff";
  return (
    <Box>
      <GlobalStyles
        styles={{
          body: { backgroundColor: !darkMode ? pageBgColor : "#202D36" },
          img: { height: "auto", maxWidth: "100%" },
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          paddingY: isFrontPage ? 4 : 10,
          paddingX: 2.5,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
