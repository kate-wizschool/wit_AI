const api = require("./apiLibrary");

const handleRequest = data => {
  if (data.hasOwnProperty("function_name")) {
    // console.log("function_name 있음 ");
    let function_name = data.function_name[0].value;
    // console.log(api[function_name], "function_name");
    // console.log(Object.keys(api), "function_name");
    let answers = [];
    if (api.hasOwnProperty(function_name)) {
      answers.push(
        `${api[function_name].name}에 대해 알려줄께`,
        api[function_name].desc,
        api[function_name].script
      );
      return answers;
    } else {
      return "api 라이브러리에 매칭되는 함수가 없음";
    }
  }
};

// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }
module.exports = { handleRequest };
