var express = require("express");
var router = express.Router();
const request = require("request");
const { Wit, log } = require("node-wit");

const handleWitData = require("../witdata").handleWitData;

// wit.ai 연결
const client = new Wit({
  accessToken: "4XBSYQJA6RUE6J7GSVLNAS4C5PB3MZCE",
  logger: new log.Logger(log.DEBUG)
});

/* GET Message. */
router.get("/", function(req, res, next) {
  client
    .message("옆으로 움직이는 함수 보여줘", {})
    .then(data => {
      // console.log("Yay, got Wit.ai response: " + data);
      handleWitData(data);
      res.render("message", { title: data });
    })
    .catch(console.error);

  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       res.render("message", { title: json.title });
  //     });

  //    request.get(
  //     { uri: "https://jsonplaceholder.typicode.com/todos/1" },
  //     function(error, res, body) {
  //       //callback
  //       jsondata = body;
  //       console.log(jsondata, "data in ");
  //     }
  //   );
});

module.exports = router;
