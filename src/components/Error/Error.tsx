import { Link } from "react-router-dom";
import errorIcon from "../../images/alert-icon.png";
import "../Error/Error.css";

const Error = ({ closeError }: { closeError: () => void }) => {
  return (
    <div className="overlay">
      <div className="error-modal">
        <img src={errorIcon} className="error-icon" />
        <h2>Oops! Something went wrong!</h2>
        <p>Please try again later</p>
        <Link to='/'><button onClick={() => closeError()} id="dismiss-button">Dismiss</button></Link>
      </div>
    </div>
  );
};

export default Error;
