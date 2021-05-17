import React from "react";
import { useSelector } from "react-redux";
import Comment from "../comment/comment.component";

import "./reply.styles.scss";

function Reply({ parentId }) {
  const comments = useSelector((state) => state.comments);

  const renderReply = (parentId) => {
    return comments.map((comment) => (
      <div className = "renderReply">
        {comment.parentId === parentId && (
          <div
            className="render__reply"
            style={{ width: "80%", marginLeft: "50px" }}
          >
            <Comment comment={comment} />
            <Reply comments={comments} parentId={comment.cid} />
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderReply(parentId)}</div>;
}

export default Reply;
