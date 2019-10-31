var express = require("express");
var router = express.Router();
const request = require("request");

/* GET Message. */
router.get("/", function(req, res, next) {
  let jsondata = "";

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      res.render("message", { title: json.title });
    });

  //    request.get(
  //     { uri: "https://jsonplaceholder.typicode.com/todos/1" },
  //     function(error, res, body) {
  //       //callback
  //       jsondata = body;
  //       console.log(jsondata, "data in ");
  //     }
  //   );
  //   console.log(jsondata, "data");
  //   res.render("message", { title: jsondata });
});

module.exports = router;
