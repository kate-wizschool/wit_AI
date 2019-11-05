var express = require("express");
var router = express.Router();
const { Wit, log } = require("node-wit");

const handleWitData = require("../witdata").handleWitData;
const handleRequest = require("../chatbot/intentRequest").handleRequest;

const REQUEST = "request";
const GREETING = "greeting";

// wit.ai 연결
const client = new Wit({
  accessToken: "W4MTGQEGSSYLYHYT2KV55XGXVSAZ3AUN",
  logger: new log.Logger(log.DEBUG)
});

/* GET Message. */
router.post("/", function(req, res, next) {
  const clientMsg = req.body.message;
  client
    .message(clientMsg, {})
    .then(data => {
      let aiMsg = handleIntent(data.entities);
      // console.log(data.intent, "data.intent");
      // let aiMsg = handleWitData(data);
      // console.log(aiMsg, "aiMsg");
      if (Array.isArray(aiMsg)) {
        let msg = "";

        aiMsg.map = value => {
          msg += `{${value} \n}`;
        };
        aiMsg = msg;
      }
      res.render("message", { msg: aiMsg });
    })
    .catch(console.error);
});
checkConfidence = confidence => {
  if (confidence >= 0.5) {
    return true;
  } else {
    return false;
  }
};

handleIntent = entities => {
  //entity 아예 없을때
  if (Object.keys(entities).length === 0) {
    console.log("!!!!!!!!!entities");
    return "좀 더 자세히 말해줘  \n entities 없음";
  }
  // intent 없을때
  if (!entities.hasOwnProperty("intent")) {
    console.log("entities 없음");
    return "좀 더 자세히 말해줘  \n intent 없음";
  } else {
    // intent confidence 체크
    if (!checkConfidence(entities.intent[0].confidence)) {
      console.log(
        Object.keys(entities).length,
        entities.intent[0].confidence,
        checkConfidence(entities.intent[0].confidence),
        " confidence 낮음 "
      );
      return "좀 더 자세히 말해줘  \n  confidence 낮음 ";
    } else {
      switch (entities.intent[0].value) {
        case REQUEST:
          return handleRequest(entities);
        case GREETING:
          return Math.random() > 0.5
            ? "안녕 만나서 반가워!"
            : "안녕~ㅎㅎ 무엇이 궁금하니?";
      }
    }
  }
};

module.exports = router;
