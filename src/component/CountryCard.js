import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const CountryCard = ({ country }) => {
  const { isDarkTheme } = useGlobalContext();
  // console.log(country);
  const { population, region, capital } = country;
  const { common: name } = country.name;
  const { svg: img } = country.flags;

  const num = population.toLocaleString("en-US");
  return (
    <article className={isDarkTheme ? "card-dark" : "card"}>
      <div className="img-container">
        <Link to={`/country/${name}`}>
          <img src={img} alt="flag" className="img con-img" />
        </Link>
      </div>
      <div className="info">
        <h4>{name}</h4>

        <h5>
          <span>Population</span>: {num}
        </h5>
        <h5>
          <span>Region</span>: {region}
        </h5>
        <h5>
          <span>Capital</span>: {capital}
        </h5>
      </div>
    </article>
  );
};
export default CountryCard;
