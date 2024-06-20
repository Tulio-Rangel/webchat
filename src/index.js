const express = require("express");
const { createServer } = require("http");
const realtimeServer = require("./realtimeServer");
const path = require("path");

const app = express();
const httpServer = createServer(app);

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(require("./routes"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Server http up
httpServer.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Call server from Socket.io
realtimeServer(httpServer);
