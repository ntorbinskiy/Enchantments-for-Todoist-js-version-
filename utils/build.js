import webpack from "webpack";
import config from "../webpack.config.js";

const { chromeExtensionBoilerplate, ...configWithoutBoilerplate } = config;

webpack(configWithoutBoilerplate, (error, stats) => {
  if (error) {
    throw error;
  }

  if (stats.hasErrors()) {
    throw stats.compilation.errors[0];
  }
});
