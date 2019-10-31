let intentType = {
  function: function(data) {
    console.log("함수 intent_function  실행", data);
  },
  temperature: function(data) {
    console.log("함수 intent_temperature  실행", data);
  }
};

const handleWitData = data => {
  const entity = data.entities;
  // let { confidence, value } = data.entities.intent[0];
  // console.log(`${entity} = entity`);
  if (Object.entries(entity).length > 0) {
    let { confidence, value } = data.entities.intent[0];
    if (confidence > 0.5) {
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
