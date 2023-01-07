const CommentCard = ({id, comment, name, }: {id: number, comment: string, name: string}) => {
  return (
    <div>
      <p>{name} said: "{comment}"</p>
    </div>
  )
}

export default CommentCard