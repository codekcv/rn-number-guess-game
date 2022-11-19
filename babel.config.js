module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            '@screens': './screens',
            '@components': './components',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
