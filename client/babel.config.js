// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo", "module:react-native-dotenv"],
//     plugins: [
//       [
//         "module:react-native-dotenv",
//         {
//           envName: "APP_ENV",
//           moduleName: "@env",
//           path: ".env",
//         },
//       ],
//     ],
//   };
// };

module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
};
