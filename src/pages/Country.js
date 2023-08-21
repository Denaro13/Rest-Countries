import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/name/";

export const loader = async ({ params }) => {
  const { name } = params;
  const { data } = await axios.get(`${url}${name}`);
  return { name, data };
};

const Country = () => {
  const { name, data } = useLoaderData();
  const country = data[0];
  const { population, region, subregion } = country;
  const capital = country.capital[0];
  const img = country.flags.svg;
  const alt = country.flags.alt;
  const domain = country.tld[0];
  // const languages = country.languages;
  const borders = country.borders;
  // const nativeName = country.name.nativeName;

  return (
    <div>
      <header className="header">
        <Link to="/" className="btn">
          Back
        </Link>
      </header>
      <div className="country">
        <img src={img} alt={alt} className="img" />
        <div className="country-info">
          <h2>{name}</h2>
          <div className="main-info">
            <div>
              <p>
                <span className="country-data">Native Name: </span>
              </p>
              <p>
                <span className="country-data">Population: </span>
                {population.toLocaleString("en-US")}
              </p>
              <p>
                <span className="country-data">Region: </span>
                {region}
              </p>
              <p>
                <span className="country-data">Sub Region: </span>
                {subregion}
              </p>
              <p>
                <span className="country-data">Capital: </span>
                {capital}
              </p>
            </div>
            <div>
              <p>
                <span className="country-data">Top Level Domain: </span>
                {domain}
              </p>
              <p>
                <span className="country-data">Currencies: </span>
              </p>
              <p>
                <span className="country-data">Languages: </span>
              </p>
            </div>
          </div>
          <footer>
            {borders ? (
              <>
                <span className="country-data">Border Countries: </span>
                {borders.map((item, index) => {
                  return (
                    <span className="border" key={index}>
                      {item}
                    </span>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Country;
