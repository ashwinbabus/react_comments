import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/action.types";
import { v4 as uuid } from "uuid";
import Input from "../input/input.component";
import "./container.styles.scss";
import AddCommentButton from "../add-comment-button/add_comment_button.component";
import Comment from "../comment/comment.component";
import Reply from "../Reply/reply.component";
import UserDropDown from "../user-select-dropdown/user-dropdown.component";

export default function Container() {
  const currUser = useSelector((state) => state.current_user);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const addComment = () => {
    if (commentText !== "") {
      dispatch({
        type: Actions.ADD_COMMENT,
        comment: {
          cid: uuid(),
          text: commentText,
          user: currUser,
          date: new Date(),
        },
      });
    }
    setCommentText("");
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <UserDropDown />

      <div className="root__comments">
        {comments.map(
          (comment) =>
            !comment.parentId && (
              <div key={comment.cid}>
                <Comment comment={comment} />
                <Reply parentId={comment.cid} />
              </div>
            )
        )}
      </div>

      <Input commentText={commentText} setCommentText={setCommentText} />

      <AddCommentButton addComment={addComment} />
    </div>
  );
}
