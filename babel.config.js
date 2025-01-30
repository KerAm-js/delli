module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'], // 👈 Добавлено, чтобы указать корневую директорию
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};