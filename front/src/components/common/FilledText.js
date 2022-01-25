import { Box, styled, TextField } from "@mui/material";
import React from "react";

function FilledText(props) {
  const { boxStyle, inputStyle } = props;
  const DarkTextField = styled(TextField)({
    background: "#333",
    "& .MuiInputLabel-root": {
      color: "#8c8c8c",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
  });
  return (
    <Box className={({ ...boxStyle }, "m-0 w-[100%] rounded")}>
      <DarkTextField
        fullWidth
        variant="filled"
        className={({ ...inputStyle }, "rounded")}
        {...props}
      />
    </Box>
  );
}

export default FilledText;
