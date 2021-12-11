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
      {
        type: "confirm",
        name: "scripts",
        message: "Should I install the base scripts for the workflow?",
      },
    ]);

    if (answers.tailwind) {
      if (answers.tailwind.includes("tailwind")) {
        this.composeWith(require.resolve("./css/tailwind"));
      }
    }

    if (Boolean(answers.scripts)) {
      this.composeWith(require.resolve("./scripts"));
    }
  }
};
