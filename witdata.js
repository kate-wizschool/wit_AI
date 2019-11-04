const { api } = require("./apiLibrary");

let intentType = {
  function_motion: function(data) {
    let msgs = ["함수탭에서 알수 있을꺼야"];

    if (data.hasOwnProperty("function_type")) {
      if (checkConfidence(data.function_type[0].confidence)) {
        let functionNameKo = "";
        let functionTap = "";

        let functionName = "";
        let functionExample = [];

        switch (data.function_type[0].value) {
          case "move":
            functionNameKo = "이동";
            functionTap = "움직임";
            if (data.hasOwnProperty("direction")) {
            } else {
              msg = `  ${api[0].name} 관한 함수는 ${functionExample} 이 있어. ${api[0].name}에 관한 함수를 더 자세히 알고싶으면 함수이름을 검색하거나 \n api의 ${api[0].name} 탭에서 확인 해봐!`;
            }

            break;
        }
      }
      return msg;
      // msg =`${functionName} 함수를 사용해야해 ${functionName} 함수는 ${functionExample} 처럼 사용할수있어! 더 자세히 알고싶으면  ${functionName}을 검색해줘!`
    }

    return msgs;
  },
  temperature: function(data) {
    console.log("함수 intent_temperature  실행", data);
  }
};
const checkConfidence = confidence => {
  if (confidence >= 0.5) {
    return true;
  } else {
    return false;
  }
};

const handleWitData = data => {
  const entity = data.entities;
  // let { confidence, value } = data.entities.intent[0];
  // console.log(`${entity} = entity`);
  // console.log(api[0].api, "api");
  // api[0].api.map(value => {
  //   console.log(value.tag, "value.tag");
  //   value.tag.filter(v => {
  //     // console.log(v, "v");
  //     // v===""
  //   });
  // });
  let functionList = [];
  api[0].api.map(value => {
    // let functionList = value.tag.filter(v => {
    //   // console.log(v, "v");
    //  if(v==="이동"){

    //  }
    //   return
    // });

    if (value.tag.hasOwnProperty("이동")) {
      console.log(value.name, "dldldlddll");
      // functionList.push(value.name);
    }
  });

  console.log(functionList, "functionList");
  if (Object.entries(entity).length > 0) {
    let { confidence, value } = data.entities.intent[0];
    if (checkConfidence(confidence)) {
      intentType[value](entity);
    } else {
      return "너무 어려워 ㅠㅠ 좀 더 자세히 얘기해줄래?";
    }
  } else {
    return "너무 어려워 ㅠㅠ 좀 더 자세히 얘기해줄래?";
  }
};
module.exports = {
  handleWitData
};
