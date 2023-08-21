import { Link, useRouteError } from "react-router-dom";

const SinglePageError = () => {
  // const error = useRouteError();
  return (
    <div className="single-page-error">
      <h3>There seems to be no match found for your search.</h3>
      <header className="header">
        <Link to="/" className="btn">
          Return
        </Link>
      </header>
    </div>
  );
};
export default SinglePageError;
