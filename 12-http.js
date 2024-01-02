const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  // console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page");
  }
  if (req.url === "/contact") {
    res.end("Contact Us");
  }
  res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to Home</a>
    `);
});

server.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
