import React, {useState} from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1d54f779a58109cf51b9b298d1129367`;


  const locationSearch = (e) => {
    if (e.key === "Enter"){
    axios.get(url).then(response => {
      setData(response.data);
      console.log(response.data);
    })
   }
  }

  


  return (
    <div className="app">
      
      <div className="search">
        <input type="text" 
        placeholder="Latitude..." 
        onChange={(e) => 
        setLat(e.target.value)}
        value={lat} 
        onKeyPress={locationSearch} 
        />
      </div>

      <div className="search">
        <input type="text" 
        placeholder="Longitude..." 
        onChange={(e) => 
        setLong(e.target.value)} 
        value={long} 
        onKeyPress={locationSearch}
        />

      </div>

      <container>
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : <p>{data.message}</p>}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}F</h1>: null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : <p>No clouds</p>}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
