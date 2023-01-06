import { Link } from 'react-router-dom'

const Error = ({ closeError }: {closeError: () => void}) => {
  return(
    <div className="overlay">
      <div className="error-modal">
        <img />
        <h2>Oops! Something went wrong!</h2>
        <p>Please try again later</p>
        <Link to='/'><button onClick={() => closeError()}>Dismiss</button></Link>
      </div>
    </div>
  )
}

export default Error