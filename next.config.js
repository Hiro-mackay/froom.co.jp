module.exports = {
  webpack(cfg, { dev, isServer }) {
    // only compile build-rss in production server build
    if (dev || !isServer) return cfg;

    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = { ...(await originalEntry()) };
      entries['generateSitemap'] = './src/lib/generateSitemap.ts';
      return entries;
    };
    return cfg;
  },
};
