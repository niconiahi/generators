const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "postcss",
        "postcss-cli",
        "postcss-import",
        "tailwindcss",

      ],
      { "save-dev": true }
    );
  }

  eslint() {
    this.fs.copy(
      this.templatePath("postcss.config.js"),
      this.destinationPath("postcss.config.js")
    );

    this.fs.copy(
      this.templatePath("tailwind.config.js"),
      this.destinationPath("tailwind.config.js")
    );

    this.fs.copy(
      this.templatePath("styles/app.css"),
      this.destinationPath("styles/app.css")
    );

    this.fs.copy(
      this.templatePath("styles/utilitary.css"),
      this.destinationPath("styles/utilitary.css")
    );

    this.fs.copy(
      this.templatePath("styles/routes/index.css"),
      this.destinationPath("styles/routes/index.css")
    );
  }
};
