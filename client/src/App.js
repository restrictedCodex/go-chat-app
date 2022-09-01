import React, { Component } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

import { connect, sendMsg } from "./api/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatHistory: [],
    };
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message: ");
      this.setState((prevState) => ({
        ChatHistory: [...prevState.chatHistory, msg],
      }));
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
