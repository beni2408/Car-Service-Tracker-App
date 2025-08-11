import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "../Components/ServiceCard.jsx";

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
      {serviceDataprops?.map((details) => (
        <ServiceCard details={details} key={details.idx} />
      ))}
    </Box>
  );
};

export default AllServiceCards;
