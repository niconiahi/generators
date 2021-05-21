const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "ESLint for what language?",
        when: (answers) => {
        console.log('initialize ~ answers', answers)
          return answers.features.includes("eslint")
        },
        choices: [
          {
            name: "typescript",
          },
        ],
      },
    ]);

    if (answers.eslint) {
        console.log('initialize ~ answers.eslint', answers.eslint)
      if (answers.eslint.includes("typescript")) {
        this.composeWith(require.resolve("./eslint/typescript"));
      }
    }
  }
};