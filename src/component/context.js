import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("africa");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };

  //   const loader = async () => {
  //     try {
  //       const response = await axios.get("https://restcountries.com/v3.1/all");
  //       const data = response.data;
  //       console.log(data);
  //       setData(data);
  //       return data;
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   useEffect(() => {
  //     loader();
  //     if (data) {
  //       return;
  //     }
  //   }, []);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://restcountries.com/v3.1/name/${searchTerm}`
  //     );
  //     const data = response.data;
  //     // console.log(data);
  //     setData(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, filteredData, setFilteredData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
