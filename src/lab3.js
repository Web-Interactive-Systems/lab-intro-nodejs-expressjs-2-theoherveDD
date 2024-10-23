const express = require("express");
const app = express();

/**

Check the documentation of expressjs middleware  
https://expressjs.com/en/guide/using-middleware.html#using-middleware

Todo: What is a middleware?
[Answer here...]

*/

/*
  Todo: Write an expressjs middleware: verifyMidware   

  to verify a ?token='some token' query param exists in a GET, POST req 
  - if there is no token throw an error
  */

  const verifyMidware = (req, res, next) => {
    console.log("\n ====> verifyMidware");
    if (req.query.token) {
      next();
    } else {
      res.status(403).send("Token is required");
    }
  };

  app.use(verifyMidware);

  app.get("/", (req, res) => {
    res.json("Hello World");
  });

  app.get("/test", (req, res) => {
    res.json("Hello Test");
  });

  app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
  });
