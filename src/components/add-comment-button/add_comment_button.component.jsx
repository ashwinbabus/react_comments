import React from "react";
import createIcon from "../../assets/create-icon.png";
import "./add_comment_button.styles.scss"

export default function AddCommentButton({addComment,setShowReplyTextBox, handleAddReply}) {

    const onClickHandler = () => {
        if(addComment){
            addComment()
        }
        if(setShowReplyTextBox){
            setShowReplyTextBox(false)
            handleAddReply()
        }
    }

  return (
    <div className="addcomment" onClick={()=>onClickHandler()} >
      <div className="addcomment__image">
        <img src={createIcon} alt="createIcon" />
      </div>
      <div className="addcomment__text">
          <h4>Add Reply</h4>
      </div>
    </div>
  );
}
