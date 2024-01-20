const express = require("express");
const app = express();
const port = 800;
app.get("/home", (req, res) => {
  res.send('world by neethu');
});
app.get("/about", (req, res) => {
  res.send("About our website ...");
});
app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/index.json");
});
app.listen(port, function () {
    console.log(`Server is running at ${port}.`);
  });

  /* in the Node Js terminal                mkdir local_endpoints
                                            cd C:\Neethu\NodeJs\local_endpoints
     for installing package.json            npm init
     for installing express & node modules  npm install express
     change script in package.json  to      "dev" :"nodemon index.js",
                                            "start":"node index.js",
                                            npm run dev
                                            nodemon index
                                        */