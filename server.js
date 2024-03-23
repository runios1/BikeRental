const express = require("express");
const path = require("path");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "http://127.0.0.1:5500"],
      connectSrc: ["'self'", "http://localhost:5500"],
      fontSrc: ["'self'"],
    },
  })
);

app.use(express.static(path.join(__dirname, "src")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/html/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Client server is running on port ${port}`);
});
