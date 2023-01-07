const CommentCard = ({commentId, comment, name, gameId, deleteComment }: {commentId: number, comment: string, name: string, gameId: string, deleteComment: (commentId: number, id: string) => void}) => {
  return (
    <div>
      <p>{name} said: "{comment}"</p>
      <p onClick={() => deleteComment(commentId, gameId)}>🗑</p>
    </div>
  )
}

export default CommentCard