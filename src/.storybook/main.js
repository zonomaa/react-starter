const path = require('path');
const tsloaderOptions = {
  configFile: path.resolve(__dirname, '../', 'tsconfig.json'),
};

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('ts-loader'),
          options: { ...tsloaderOptions },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push(path.resolve(__dirname, '..'))
    return config;
  },
};
