import React from "react";

import AllServiceCards from "../src/Components/AllServiceCards";

const Services = ({ serviceDetails }) => {
  return (
    <div>
      <AllServiceCards serviceDataprops={serviceDetails} />
    </div>
  );
};

export default Services;
