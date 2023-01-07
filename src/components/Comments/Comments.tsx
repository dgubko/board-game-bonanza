import { Review } from "../../interfaces"
import CommentCard from '../CommentCard/CommentCard'

const Comments = ({ comments, id, deleteComment }: {comments: Review[], id: string, deleteComment: (commentId: number, id: string) => void}) => {
  const allComments = comments.map(comment => {
    return <CommentCard 
      commentId={comment.commentId} 
      key={comment.commentId}
      comment={comment.comment}
      name={comment.name}
      gameId={id}
      deleteComment={deleteComment}
    />
  })

  return (
    <div>
      {allComments}
    </div>
  )
}


export default Comments