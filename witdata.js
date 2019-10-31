// const intent_function = data => {
//   console.log("함수 intent_function  실행");
// };
// const intent_temperature = data => {
//   console.log("함수 intent_temperature  실행");
// };

let intentType = {
  function: function(data) {
    console.log("함수 intent_function  실행", data);
  },
  temperature: function(data) {
    console.log("함수 intent_temperature  실행", data);
  }
};

const handleWitData = data => {
  let { confidence, value } = data.entities.intent[0];
  console.log(`${confidence} = 자신감,${value} = 값 ,,,,,`);
  console.log(`${data} = data`);

  if (confidence >= 0.5) {
    intentType[value](value);
  } else {
    return "좀 더 자세히 얘기해줄래?";
  }
};
module.exports = {
  handleWitData
};
