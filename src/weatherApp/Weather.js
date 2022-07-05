import React, { useState } from "react";
import {
  Container,
  Error,
  TopContent,
  BottomContent,
  FormContainer,
  ContentContainer,
} from "./styles";

const ErrorMessage = ({ error }) => {
  return <Error>{error}</Error>;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    setCityName("");
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response) {
        const data = await response.json();
        if (data.cod === "404") {
          setError(data.message);
        } else {
          setWeatherData(data);
          setError("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Weather App For USA Cities</h1>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </FormContainer>
      {error && <ErrorMessage error={error} />}
      {weatherData && !error && (
        <ContentContainer>
          <TopContent>
            <h3>{weatherData?.name}</h3>
            <h1>{(weatherData?.main?.temp - 273.15).toFixed(2)} &#8451;</h1>
            <p>{weatherData?.weather[0]?.description}</p>
          </TopContent>
          <BottomContent>
            <div>
              <p>Pressure</p>
              <h4>{weatherData?.main?.pressure} hPa</h4>
            </div>
            <div>
              <p>humidity</p>
              <h4>{weatherData?.main?.humidity}%</h4>
            </div>
            <div>
              <p>temp_min</p>
              <h4>
                {(weatherData?.main?.temp_min - 273.15).toFixed(2)} &#8451;
              </h4>
            </div>
            <div>
              <p>temp_max</p>
              <h4>
                {(weatherData?.main?.temp_max - 273.15).toFixed(2)} &#8451;
              </h4>
            </div>
          </BottomContent>
        </ContentContainer>
      )}
    </Container>
  );
};

export default Weather;
