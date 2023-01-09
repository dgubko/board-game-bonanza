import { Review } from "../../interfaces";
import CommentCard from "../CommentCard/CommentCard";
import "./Comments.css";

const Comments = ({
  comments,
  id,
  deleteComment,
}: {
  comments: Review[];
  id: string;
  deleteComment: (commentId: number, id: string) => void;
}) => {
  const allComments = comments.map((comment) => {
    return (
      <CommentCard
        key={comment.commentId}
        commentId={comment.commentId}
        comment={comment.comment}
        name={comment.name}
        gameId={id}
        deleteComment={deleteComment}
      />
    );
  });

  return <div className="all-comments">{allComments}</div>;
};

export default Comments;
