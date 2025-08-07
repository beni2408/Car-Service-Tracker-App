import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div className="whole-page">
        <Searchcontainer />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;

function Searchcontainer() {
  return (
    <div className="search_container">
      <div className="search_container_1">
        {/* <label htmlFor="searchinp">Search Services</label> */}
        <input type="text" name="searchinp" placeholder="Search Services" />
      </div>
      <div className="search_container_2">
        <button>Search</button>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="card_wraper">
      <div className="card">
        <div className="card_container_1">
          <h1>Service</h1>
          <h3>Location : Chennai</h3>
        </div>
        <div className="card_container_2">
          <p>vehicle Type</p>
          <p>Date of Service</p>
          <p>Date of Delivery</p>
          <p>Date of Delivery</p>
        </div>
        <div className="card_container_3">
          <h3>Service amount</h3>
        </div>
      </div>
    </div>
  );
}
