const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// serve static frontend
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors("*"));
// api
app.get("/api/services", (req, res) => {
  const data = [
    { id: 1, name: "Nodejs" },
    { id: 2, name: "C#" },
    { id: 3, name: "Java" },
  ];
  res.json({ success: true, data: data });
});
// SPA fallback (React Router)
app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// app.get('/', (req,res)=>{
//     res.json({success: true, data: 'hello'})
// });

module.exports = app;
