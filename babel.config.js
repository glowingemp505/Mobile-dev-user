module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        processNestedWorklets: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@assets': './assets',
          '@components': './src/components',
          '@data': './src/data',
          '@pages': './src/pages',
          '@utils': './src/utils',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        ['transform-remove-console'],
      ],
    },
  },
};