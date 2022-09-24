module.exports = {
  plugins: [
    {
      resolve: "gatsby-wp-core",
      options: {
        wordPressUrl: `http://localhost:8000`,
      },
    },
  ],
};
