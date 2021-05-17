import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/action.types";
import { v4 as uuid } from "uuid";
import Input from "../input/input.component";
import "./container.styles.scss";
import AddCommentButton from "../add-comment-button/add_comment_button.component";
import Comment from "../comment/comment.component";
import Reply from "../Reply/reply.component";
import DropDown from "../../assets/dropdown.png";

export default function Container() {
  const users = useSelector((state) => state.users);

  const currUser = useSelector((state) => state.current_user);

  const comments = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

  const [showDrop, setShowDrop] = useState(false);


  const handleUserSelectChange = (user) => {
    dispatch({ type: Actions.SET_CURR_USER, user });
    setShowDrop(false);
  };

  const addComment = () => {
    console.log(currUser);
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

      <div className="select__user">
        <div className="select" onClick={() => setShowDrop(!showDrop)}>
          <p>{currUser.name}</p>
          <img src={DropDown} alt="" />
        </div>
        {showDrop &&
          users.map((user) => (
            <div
              className="select__dropdown"
              onClick={() => handleUserSelectChange(user)}
            >
              <img src={user.pic} alt="usricon" className="select__userimg" />
              <p>{user.name}</p>
            </div>
          ))}
      </div>

      <div className="root__comments">
        {comments.map(
          (comment) =>
            !comment.parentId && (
              <div  key={comment.cid}>
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
