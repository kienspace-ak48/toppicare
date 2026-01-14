require("dotenv").config();
const http = require("http");
const https = require("https");
const app = require("./app");
const HTTP_PORT = process.env.HTTP_PORT;
const HOST = "0.0.0.0";

// initial server
const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, HOST, () => {
  console.log(`🚀 App is running on http://localhost:${HTTP_PORT}`);
});
