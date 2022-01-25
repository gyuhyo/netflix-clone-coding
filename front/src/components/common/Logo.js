import { Typography } from "@mui/material";
import React from "react";

function Logo(props) {
  const { size, component, style } = props;
  return (
    <Typography
      variant={size}
      component={component}
      color="error"
      className={style}
    >
      NETFLIX
    </Typography>
  );
}

export default Logo;
