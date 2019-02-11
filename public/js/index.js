var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "Agjelos",
    text: "Hellooo"
  });
});

socket.on("disconnect", function() {
  console.log("Discconected");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
