import { useState } from "react"
import './Form.css'


const Form = () => {
  interface Review {
    name: string;
    comment: string;
  }

  const [review, setReview] = useState<Review>({name: "", comment: ""})

  const handleChange = (event: {target: any}) => {
    const { name, value } = event.target
    setReview(prevState => ({...prevState, [name]: value}))
  }

  const submitComment = () => {
    addComment()
    clearInputs()
  }

  const clearInputs = () => {
    setReview({name: "", comment: ""})
  }

  return (
    <div className="form">
      <input
        type='text'
        name='name'
        placeholder='name'
        value={review.name}
        onChange={(event) => handleChange(event)}
      />
      <textarea 
        name='comment'
        placeholder='Type your comment'
        value={review.comment}
        onChange={(event) => handleChange(event)}
      />
      <button onClick={() => {submitComment()}}>Submit</button>
    </div>
  )
}

export default Form