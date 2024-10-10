module.exports = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "src/styles/",
      files: [
        {
          destination: "_tokens.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
