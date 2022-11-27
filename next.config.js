module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/profile": { page: "/profile" }
    };
  }
};
