const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2eip9sf3oo6c2.cloudfront.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Adicione um loader para arquivos PDF
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;