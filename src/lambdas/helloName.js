require("module-alias/register");
const HelloService = require("~/services/HelloService");

exports.handler = async (event) => {
  HelloService.sayHello(event.name);

  return {
    statusCode: 200,
    event,
  };
};
