const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Wowwzy");
  } else if (req.url === "/about") {
    res.end("about us");
  } else {
    res.end(`
            <div>Wrong Page Here</div>
        `);
  }
});

server.listen(1500);
