import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./servicecard";

const AllServiceCards = ({ serviceDataprops }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        margin: "20px",
      }}
    >
      {serviceDataprops?.map((details, idx) => (
        <ServiceCard details={details} key={idx} />
      ))}
    </Box>
  );
};

export default AllServiceCards;
