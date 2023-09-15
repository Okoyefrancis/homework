const http = require("http");

// const PORT = 2000

// const app = http.createServer((request, response)=>{
//     response.writeHead(200)
//     response.write("server is up and running .")
//     response.end()
// })

// app.listen(PORT, ()=>{
//     console.log("port is up and listening");
// })

//1

// const PORT1 = 2000

// const app1 = http.createServer((request, response)=>{
//     response.writeHead(200)
//     response.write("server is working")
//     response.end()
// })

// app1.listen(PORT, ()=>{
//     console.log("it is running");
// })

//2

// const PORT = 2000

// const app = http.createServer((request, response)=>{
//     response.writeHead(200)
//     response.write("server is active")
// })

// app.listen(PORT, ()={
//     console.log("port is working");
// })

//3

// const Port = 2000;

// const Server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.writeHead(200, { content: "text/html" });
//     response.write(`<html>
//     <body>
//     <p> this is my home page</p>
//     </body>
//     </html>`);
//     response.end();
//   } else if (request.url === "/about") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.write(`<html>
//     <body>
//     <p>This is my about page</p>
//     </body>
//     </html>`);
//     response.end();
//   } else if (request.url === "/contact") {
//     response.writeHead(200, { content: "text/html" });
//     response.write(`<html>
//     <body>
//     <p> This is my contact page</p>
//     </body>
//     </html>`);
//   } else response.end("Invalid request");
// });

// Server.listen(Port, () => {
//   console.log("");
//   console.log("port is working");
// });

const http = require("http");
const userAgent = require("user-agents");

const Port = 2000;

const Server = http.createServer((req, res) => {
  const userAgentString = req.headers["user-agent"];
  const userAgentInfo = userAgent.parse(userAgentString);
  const browserName = userAgentInfo.family;
  const deviceSpec = userAgentInfo.device.tostring();

  res.writeHead(200, { "content-Type": "text/html" });
  res.end(
    `You are using ${browserName} to access me<br>Device Specification: ${deviceSpec}`
  );

  Server.listen(3000, () => {
    console.log("server is up and running on port", Port);
  });
});
