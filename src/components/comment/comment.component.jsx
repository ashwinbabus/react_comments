import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Actions from "../../redux/action.types";
import { timeSince } from "../../util";
import AddCommentButton from "../add-comment-button/add_comment_button.component";
import Input from "../input/input.component";

import "./comment.styles.scss";

export default function Comment({ comment }) {
  const { cid, date, user, text } = comment;

  const dispatch = useDispatch();

  const currUser = useSelector((state) => state.current_user);

  const [showReplyTextBox, setShowReplyTextBox] = useState(false);

  const [replyText, setReplyText] = useState("");

  const handleAddReply = () => {
    const replyid = uuid();
    const reply = {
      cid: replyid,
      text: replyText,
      user: currUser,
      date: new Date(),
      parentId: cid,
    };

    dispatch({
      type: Actions.ADD_COMMENT,
      comment: reply,
    });

    setReplyText("");
  };

  return (
    <div className="comment__container">
      <img src={user.pic} alt="" className="user__image" />

      <div className="comment__info">
        <div className="comment__user">
          <h4 className="comment__user__name">{user.name}</h4>
          <p className="time">{timeSince(date)} ago</p>
        </div>

        <p className="comment__text">{text}</p>

        <div className="reply__container">
          <p
            className="comment__reply"
            onClick={() => setShowReplyTextBox(!showReplyTextBox)}
          >
            Reply
          </p>

          {showReplyTextBox && (
            <div className="reply__input">
              <Input setReplyText={setReplyText} replyText={replyText} />
              <AddCommentButton
                setShowReplyTextBox={setShowReplyTextBox}
                handleAddReply={handleAddReply}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
