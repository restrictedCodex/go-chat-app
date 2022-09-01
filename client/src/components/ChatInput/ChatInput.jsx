import React, { Component } from "react";
import "./chatinput.scss";

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <input
          onKeyDown={this.props.send}
          placeholder="Enter a Message........"
        />
      </div>
    );
  }
}

export default ChatInput;
