import React, { useEffect, useState } from "react";
import Global from "./Global";
import SingleCountry from "./SingleCountry";

const CovidTracker = () => {
  const [covidData, setCovidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary");
      if (response) {
        const data = await response.json();
        setCovidData(data.Countries);
        console.log(covidData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const data = covidData.filter((country) => {
      if (country.Country.toLowerCase().includes(searchTerm.toLowerCase())) {
        return country;
      }
    });
    setFilteredResults(data);
  }, [searchTerm, covidData]);
  return (
    <div>
      <h1>Covid Cases Tracker App</h1>
      <Global />
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search by Country Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="covidBox">
        {filteredResults.map((country) => {
          const {
            ID,
            Country,
            CountryCode,
            NewConfirmed,
            TotalConfirmed,
            TotalDeaths,
            Date,
          } = country;
          const data = {
            Country,
            CountryCode,
            NewConfirmed,
            TotalConfirmed,
            TotalDeaths,
            Date,
          };
          return <SingleCountry key={ID} {...data} />;
        })}
      </div>
    </div>
  );
};

export default CovidTracker;
