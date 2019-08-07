const path = require("path")
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.join(process.cwd(), "node_modules/react"),
      },
    },
  })
}
