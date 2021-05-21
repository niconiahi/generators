const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "ESLint for what language?",
        choices: [
          {
            name: "typescript",
          },
        ],
      },
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes("typescript")) {
        this.composeWith(require.resolve("./eslint/typescript"));
      }
    }
  }
};