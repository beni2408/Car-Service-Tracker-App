import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../Backend/backend";
import "./App.css";
import React, { useEffect, useState } from "react";
import AllServiceCards from "./Components/AllServiceCards.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`)
      .then((response) => response.json())
      .then((serviceData) => setServiceDetails(serviceData))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AllServiceCards serviceDataprops={serviceDetails} />}
        />
        <Route
          path="/nppage"
          element={<h1 style={{ color: "red" }}>No Page</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
// function Searchcontainer() {
//   return (
//     <div className="search_container">
//       <div className="search_container_1">
//         {/* <label htmlFor="searchinp">Search Services</label> */}
//         <input type="text" name="searchinp" placeholder="Search Services" />
//       </div>
//       <div className="search_container_2">
//         <button>Search</button>
//       </div>
//     </div>
//   );
// }

// function Card() {
//   return (
//     <div className="card_wraper">
//       <div className="card">
//         <div className="card_container_1">
//           <h1>Service</h1>
//           <h3>Location : Chennai</h3>
//         </div>
//         <div className="card_container_2">
//           <p>vehicle Type</p>
//           <p>Date of Service</p>
//           <p>Date of Delivery</p>
//           <p>Date of Delivery</p>
//         </div>
//         <div className="card_container_3">
//           <h3>Service amount</h3>
//         </div>
//       </div>
//     </div>
//   );
// }
