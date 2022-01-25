import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

function WhiteButton({ props, children }) {
  const CustomButton = styled(Button)({
    border: "1px solid #fff",
    color: "#fff",
  });
  return <CustomButton {...props}>{children}</CustomButton>;
}

export default WhiteButton;
