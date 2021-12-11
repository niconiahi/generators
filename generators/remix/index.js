const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "tailwind",
        message: "Which CSS configuration do you want?",
        choices: [
          {
            name: "tailwind",
          },
        ],
      },
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes("tailwind")) {
        this.composeWith(require.resolve("./css/tailwind"));
      }
    }
  }
};
