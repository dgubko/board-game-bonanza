import { Review } from "../../interfaces"
import CommentCard from '../CommentCard/CommentCard'

const Comments = ({ comments }: {comments: Review[]}) => {
  const allComments = comments.map(comment => {
    return <CommentCard 
      id={comment.commentId} 
      key={comment.commentId}
      comment={comment.comment}
      name={comment.name}
    />
  })

  return (
    <div>
      {allComments}
    </div>
  )
}


export default Comments