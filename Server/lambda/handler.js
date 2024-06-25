const Responses = require("./API_Responses");

exports.handler = async (event) => {
  return Responses._500({ message: "This is just a test" });
};
