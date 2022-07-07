import React from "react";

const SingleCountry = ({
  ID,
  Country,
  CountryCode,
  NewConfirmed,
  TotalConfirmed,
  TotalDeaths,
  Date,
}) => {
  return (
    <div className="caseBox" key={ID}>
      <div className="countryName">
        <h4>{Country}</h4>
        <h5>{CountryCode}</h5>
      </div>
      <div className="casesBox">
        <div className="box totalcases">
          <h4>Total Cases</h4>
          <p>{TotalConfirmed}</p>
        </div>
        <div className="box totaldeaths">
          <h4>Total Deaths</h4>
          <p>{TotalDeaths}</p>
        </div>
        <div className="box newcases">
          <h4>New Cases</h4>
          <p>{NewConfirmed}</p>
        </div>
        <div className="box date">
          <h4>{Date}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
