import { useState } from "react"
import './Form.css'
import { Review } from '../../interfaces'


const Form = ({ id, addComment }: {id:string; addComment: (review: Review, id: string) => void}) => {
  

  const [review, setReview] = useState<Review>({name: "", comment: "", commentId: 0})
  const [userError, setUserError] = useState<boolean>(false)

  const handleChange = (event: {target: any}) => {
    const { name, value } = event.target
    setReview(prevState => ({...prevState, [name]: value, commentId: Date.now()}))
  }

  const submitComment = () => {
    if(!review.name || !review.comment) {
      setUserError(true)
    } else {
      addComment(review, id)
      setUserError(false)
      clearInputs()
    }
  }

  const clearInputs = () => {
    setReview({name: "", comment: "", commentId: 0})
  }

  return (
    <div className="form">
      {userError && <p>Please enter full review</p>}
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