import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Country } from "../../../../types";

type Props = {
  country: Country;
};

function CountryCard({ country }: Props) {
  const history = useHistory();
  const theme = useTheme();
  const smMQ = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const itemStyles = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { ease: [0.78, 0.14, 0.15, 0.86] },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.78, 0.14, 0.15, 0.86] },
    },
  };

  return (
    <Grid
      component={motion.div}
      variants={itemStyles}
      initial="hidden"
      animate={controls}
      ref={ref}
      item
      xs={10}
      sm={6}
      md={4}
      lg={3}
    >
      <Card>
        <CardActionArea
          href={`/country/${country.name.common.replaceAll(" ", "_")}`}
          onClick={(e) => {
            e.preventDefault();
            history.push(
              `/country/${country.name.common.replaceAll(" ", "_")}`
            );
          }}
        >
          <Box
            sx={{
              height: !smMQ ? 160 : 198,
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundColor: "#fff",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${country.flags.svg})`,
            }}
          />
          <CardContent sx={{ paddingBottom: !smMQ ? 4.5 : 2 }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "clip",
                paddingTop: !smMQ ? 0 : 1,
              }}
            >
              {country.name.common}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Box
                fontWeight="bold"
                component="span"
                sx={{ marginRight: 0.25 }}
              >
                Population:
              </Box>
              {country.population}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Box
                fontWeight="bold"
                component="span"
                sx={{ marginRight: 0.25 }}
              >
                Region:
              </Box>
              {country.region}
            </Typography>
            <Typography variant="body2">
              <Box
                fontWeight="bold"
                component="span"
                sx={{ marginRight: 0.25 }}
              >
                Capital:
              </Box>
              {country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CountryCard;
