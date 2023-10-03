const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////
// blocking synchronous way
// const name = "jovia";
// console.log(name);

// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is from about the avocado : ${textIn}.\n created on ${Date}`;
// fs.writeFileSync("./starter/txt/output.txt", textOut);
// console.log("File written");
///////////////////////////////////////////////

// reading and wrirign files in a astnchronous way
// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   //   if (err) return console.log("Error");
//   fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./starter/txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./starter/txt/final.txt",
//         `${data2}\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has been written💥");
//         }
//       );
//     });
//   });
// });
// console.log("Will read file!");

//////////////////////////
//SERVER
//create a server that listens to j=http requests
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end("Listening on port 8000, hello from the server");
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });

//Routing using URL
const server = http.createServer((req, res) => {
  // console.log(req.url);
  //implementing routing using the if
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end("this is the Home Page");
  } else if (pathName === "/product") {
    res.end("this is the Product");
  } else if (pathName == "/recipes") {
    res.end("Wrong pathname");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "customised html in node",
    });
    res.end("Page not found");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
