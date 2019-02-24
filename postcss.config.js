module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-font-magician")({
      variants: {
        Roboto: {
          "300 light": [],
          "400 regular": [],
          "500 medium": [],
          "600 bold": [],
          "700 black": []
        },
        muli: ['google']
      }
    }),
    require("postcss-cssnext")({
      features: {
        autoprefixer: {
          grid: true
        }
      }
    }),
    require("cssnano")
  ]
};
