import "./CommentCard.css";
import { CgTrash } from "react-icons/cg";

const CommentCard = ({
  commentId,
  comment,
  name,
  gameId,
  deleteComment,
}: {
  commentId: number;
  comment: string;
  name: string;
  gameId: string;
  deleteComment: (commentId: number, id: string) => void;
}) => {
  return (
    <div className="comment-container">
      <p className="comment-statement">
        {name} said: "{comment}"
      </p>
      <p onClick={() => deleteComment(commentId, gameId)}>
        {
          <button className="trash-can" aria-label="trash delete button">
            <CgTrash className="delete" />
          </button>
        }
      </p>
    </div>
  );
};

export default CommentCard;
