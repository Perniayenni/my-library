/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path')

const config = {
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
        babelOptions: {},
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Documentation'
  },
};
export default config;
