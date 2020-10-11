import React from "react";
import "./Messages.css";

function Messages({ message, timestamp, user, userImage }) {
  return (
    <div className="messages">
      <img src={userImage} alt="" />
      <div className="messages_info">
        <h4>
          {user}
          <span className="messages_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
