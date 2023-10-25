export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  gh: {
    username: process.env.GH_USERNAME,
    repo_name: process.env.GH_REPO_NAME,
  },
});
