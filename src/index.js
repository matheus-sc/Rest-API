import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Ninjas() {
  const [ninjas, setNinjas] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const lng = event.target.lng.value;
    const lat = event.target.lat.value;

    fetch(`/api/ninjas?lng=${lng}&lat=${lat}`)
      .then((data) => {
        return data.json()
      })
      .then(json => {
        setNinjas(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ninjasList = ninjas.map((ninja, index) => (
    <li key={index}>
      <span className={ninja.obj.available}></span>
      <span className="name">{ninja.obj.name}</span>
      <span className="rank">{ninja.obj.rank}</span>
      <span className="dist">{Math.floor(ninja.dis / 1000)} km</span>
    </li>
  ));

  return (
    <div id="ninja-container">
      <form id="search" onSubmit={handleSubmit}>
        <label>Enter your Latitude:</label>
        <input type="text" name="lat" placeholder="latitude" required />
        <label>Enter your Longitude:</label>
        <input type="text" name="lng" placeholder="longitude" required />
        <input type="submit" value="Find Ninjas" />
      </form>
      <ul>{ninjasList}</ul>
    </div>
  );
}

const root = document.getElementById('ninjas');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(<Ninjas />);