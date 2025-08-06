/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['pulseui-base'],
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config, { isServer }) => {
    // Handle CSS modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        },
        'sass-loader'
      ]
    });

    return config;
  }
};

module.exports = nextConfig; 