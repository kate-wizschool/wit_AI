const { api } = require("./apiLibrary");
const handleRequest = data => {
  if (data.hasOwnProperty("function_name")) {
    console.log("function_name 있음 ");
  }
};
module.exports = { handleRequest };
