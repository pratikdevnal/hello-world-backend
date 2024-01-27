// app.js

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Define a route that responds with "Hello, World!" when accessed
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
