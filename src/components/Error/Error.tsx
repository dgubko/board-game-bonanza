const Error = ({ closeError }: {closeError: () => void}) => {
  return(
    <div className="overlay">
      <div className="error-modal">
        <img />
        <h2>Oops! Something went wrong!</h2>
        <p>Please try again later</p>
        <button onClick={() => {closeError()}}>Dismiss</button>
      </div>
      
    </div>
  )
}

export default Error