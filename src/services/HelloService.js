module.exports = {
  /**
   * Output hello message to the console.
   * @param {string} name - The name to output
   * @returns {void}
   */
  sayHello(name = "") {
    console.log(`Hello ${name || "Mars"}!`);
  },
};
