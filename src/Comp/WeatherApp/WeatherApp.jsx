import React, { Fragment, useState } from "react";
import "./weather.scss";

function WeatherApp() {
 
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("0");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchAPIdata = async () => {
    // setLoading(true);
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8c436fb9341532a2537cae32b87500d7`;
    // const response = await fetch(url);
    // const resJson = await response.json();
    // console.log(resJson.main.temp)
    // const tempData = resJson.main.temp;
    // const cel = tempData - 273.15;
    // setTemp(Math.round(cel).toFixed(1));
    // setCity(search);
    // setLoading(false);
    setLoading(true);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8c436fb9341532a2537cae32b87500d7`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //Error checking
        if (data.cod === "404") {
          setLoading(false);
          console.log("404");
          return setError(data.message);
          
        } 
        else if (data.cod === "400") {
          setLoading(false);
          console.log("400");
          return setError(data.message);
        }
        // debugger;
        //data extraction
        const tempData = data.main.temp;
        const cel = tempData - 273.15;
        console.log("temperature= "+cel)
        setTemp(Math.round(cel).toFixed(1));
        setCity(search);
        setLoading(false);
        setError(null)
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.log("this is catch")
      });
  };

  //Onchange handler
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="weather-container">
      <div className="input-field">
        <p>City Name:</p>
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="btn">
        <button onClick={fetchAPIdata}>
          {loading ? "checking..." : "Check"}
        </button>
      </div>
      <div className="temp-field">
        {error !== null ? (
          <h3>{error}</h3>
        ) : (
          <>
            <div>
              <i className="fas fa-street-view"></i>
            </div>
            {city ? (
              <Fragment>
                <h3>CITY:{city}</h3>
                <h1>{temp}°C</h1>{" "}
              </Fragment>
            ) : loading ? (
              "Loading..."
            ) : (
              <p>Please check in a city</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
