var socket = new WebSocket("ws://localhost:9000/ws");

let connect = (cb) => {
  console.log("connecting");

  socket.onopen = () => {
    console.log("succesfully connected");
  };

  socket.onmessage = (msg) => {
    console.log("Message: ", msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Cloased ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket error:", error);
  };
};

let sendMsg = (msg) => {
  console.log("sending Msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
