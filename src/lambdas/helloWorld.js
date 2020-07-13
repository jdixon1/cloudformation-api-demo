require("module-alias/register");
const HelloService = require("../services/HelloService");

exports.handler = (event) => {
  HelloService.sayHello();

  return {
    statusCode: 200,
    event,
  };
};
