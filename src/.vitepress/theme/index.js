import DefaultTheme from "vitepress/theme";
import "./index.css";

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
  },
};
