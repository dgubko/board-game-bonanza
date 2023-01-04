import { Link } from "react-router-dom";
import "../PageNotFound/PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="page404">
      <h1>☞ 404</h1>
      <h3>Page not found</h3>
      <p>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.{" "}
      </p>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};
