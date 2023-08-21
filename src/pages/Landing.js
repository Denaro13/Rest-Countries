import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Countries from "../component/Countries";
import FormContainer from "../component/FormContainer";

import { useState } from "react";

const allCountries = "https://restcountries.com/v3.1/";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const value = url.searchParams.get("search");
  // console.log(value);
  const searchTerm = value ? `name/${value}` : "all";
  const response = await axios.get(`${allCountries}${searchTerm}`);
  // console.log(response);
  return {
    countries: response.data,
    status: response.request.statusText,
    value,
  };
};
const Landing = () => {
  const { countries } = useLoaderData();
  // console.log(status);
  // const { filteredData, setFilteredData } = useGlobalContext();
  const [region, setRegion] = useState("all");
  // const [searchTerm, setSearchTerm] = useState("");

  const filteredData =
    region === "all"
      ? countries
      : countries.filter((countries) => countries.region === region);

  // const filteredData = countries.filter((item) => {
  //   const categoryMatches = region === "all" || item.region === region;
  //   const searchTermMatches = item.name.toString().includes(searchTerm);

  //   return categoryMatches && searchTermMatches;
  // });

  return (
    <>
      <FormContainer setRegion={setRegion} />
      <Countries countries={filteredData} />
    </>
  );
};
export default Landing;
