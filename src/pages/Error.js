import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="error-page">
        <div>
          <img src={img} alt="not found" />
          <h3>ohh!</h3>
          <p>The page you are looking for seems not to be available</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-page">
      <div>
        <h3>Something went wrong</h3>;
      </div>
    </div>
  );
};
export default Error;
