import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useGlobalContext } from "./context";
const Countries = ({ countries }) => {
  // const { isDarkTheme, data } = useGlobalContext();
  // console.log(countries);
  if (!countries) {
    <h4 style={{ textAlign: "center" }}>No matching country found...</h4>;
  }

  return (
    <div className="card-container">
      {countries.map((country, index) => {
        return <CountryCard key={index} country={country} />;
      })}
    </div>
  );
};
export default Countries;
