import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function main() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "100vw" }}>
      <Box name="now-activity-content">
        <Box name="main-header"></Box>
        <Box name="now-activitiy-content-info"></Box>
      </Box>
    </Container>
  );
}

export default main;
