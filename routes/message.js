var express = require("express");
var router = express.Router();
const { Wit, log } = require("node-wit");

const handleWitData = require("../witdata").handleWitData;

// wit.ai 연결
const client = new Wit({
  accessToken: "4XBSYQJA6RUE6J7GSVLNAS4C5PB3MZCE",
  logger: new log.Logger(log.DEBUG)
});

/* GET Message. */
router.post("/", function(req, res, next) {
  const clientMsg = req.body.message;
  client
    .message(clientMsg, {})
    .then(data => {
      const aiMsg = handleWitData(data);
      res.render("message", { msg: aiMsg });
    })
    .catch(console.error);
});

module.exports = router;
