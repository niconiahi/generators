const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "commitizen",
        "@commitlint/cli",
        "cz-conventional-changelog",
        "@commitlint/config-conventional",
        "eslint",
        "prettier",
        "typescript",
        "eslint-plugin-react",
        "eslint-plugin-import",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-react-hooks",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin"
      ],
      { "save-dev": true }
    );
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc"),
      this.destinationPath(".eslintrc")
    );

    this.fs.copy(
      this.templatePath(".czrc"),
      this.destinationPath(".czrc")
    );

    this.fs.copy(
      this.templatePath("commitlint.config.js"),
      this.destinationPath("commitlint.config.js")
    );

    this.fs.copy(
      this.templatePath("extensions.json"),
      this.destinationPath(".vscode/extensions.json")
    );

    this.fs.copy(
      this.templatePath("settings.json"),
      this.destinationPath(".vscode/settings.json")
    );

    this.fs.copy(
      this.templatePath(".prettierrc"),
      this.destinationPath(".prettierrc")
    );

    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
