const wizApi = require("./apiLibrary");
const conceptApi = require("./conceptLibrary");

const handleRequest = data => {
  let answers = [];
  if (data.hasOwnProperty("function_name")) {
    // console.log("function_name 있음 ");
    let function_name = data.function_name[0].value;
    // console.log(wizApi[function_name], "function_name");
    // console.log(Object.keys(wizApi), "function_name");

    if (wizApi.hasOwnProperty(function_name)) {
      answers.push(
        `${wizApi[function_name].name}에 대해 알려줄께`,
        wizApi[function_name].desc,
        wizApi[function_name].script
      );
      return answers;
    } else {
      answers = "wizApi 라이브러리에 매칭되는 함수가 없음";
      return answers;
    }
  } else if (data.hasOwnProperty("concept")) {
    let concept_name = data.concept[0].value;

    answers.push(
      `${conceptApi[concept_name].name}에 대해 알려줄께`,
      conceptApi[concept_name].desc,
      `${conceptApi[concept_name].name}를 사용하면 ${conceptApi[concept_name].feature}`,
      `${conceptApi[concept_name].example}`
    );

    if (data.hasOwnProperty("concept_sub")) {
      let concept_sub_name = data.concept_sub[0].value;

      answers.push(
        `${conceptApi[concept_name].name}에 대해 알려줄께`,
        conceptApi[concept_name].desc,
        `${conceptApi[concept_name].name}를 사용하면 ${conceptApi[concept_name].feature}`,
        `${conceptApi[concept_name].example}`
      );
    }
    return answers;
  }
};

// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }
module.exports = { handleRequest };
