import React, { ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";

type Props = {
  children: ReactElement;
  window?: any;
};

function ElevationScroll({ children, window }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default ElevationScroll;
