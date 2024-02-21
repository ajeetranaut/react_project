module.exports = {
  images: {
    remotePatterns: [
      // *** For WordPress Product Image URL ***
      {
        protocol: "https",
        hostname: "testing.eglogics.online",
      },
      // *** For Placeholder Image URL ***
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      // *** For WordPress User Avatar URL ***
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  reactStrictMode: true,
};
