import React from "react";
import "./input.styles.scss";

export default function Input({
  commentText,
  setCommentText,
  setReplyText,
  replyText,
}) {
  const handleChange = (e) => {
    if (setCommentText) setCommentText(e.target.value);
    if (setReplyText) setReplyText(e.target.value);
  };

  return (
    <div className="input__component">
      <textarea
        className="comment__textarea"
        name="comment"
        cols="30"
        rows="10"
        onChange={(e) => handleChange(e)}
        value={
          commentText !== undefined
            ? commentText
            : replyText !== undefined
            ? replyText
            : ""
        }
      />
    </div>
  );
}
