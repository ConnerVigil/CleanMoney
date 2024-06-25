const Responses = require("./API_Responses");

exports.handler = async (event) => {
  return Responses._200();
};
