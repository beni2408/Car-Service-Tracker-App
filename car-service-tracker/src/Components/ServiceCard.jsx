import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function ServiceCard({ details }) {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          cursor: "pointer",
          height: "200px",
          width: "300px",
          padding: "20px",
        }}
      >
        <Stack spacing={4}>
          <Paper elevation={3}>
            <Typography>{details.service_provider}</Typography>
            <Typography>{details.location}</Typography>
          </Paper>
          <Box>
            <Typography>{details.vehicle_type}</Typography>
            <Typography>{details.date_of_delivery}</Typography>
            <Typography>{details.service_amount}</Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ServiceCard;
