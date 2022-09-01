import React, { Component } from "react";
import "./chathistory.scss";
import Message from "../Message/Message";

class ChatHistory extends Component {
  render() {
    console.log(this.props.ChatHistory);

    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {this.props.ChatHistory.map((msg) => (
          <Message key={msg.timeStamp} message={msg.data} />
        ))}
      </div>
    );
  }
}

export default ChatHistory;
