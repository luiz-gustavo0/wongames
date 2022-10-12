module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-docs/preset',
    '@storybook/addon-controls',
    'storybook-addon-next-router',
    'storybook-addon-next'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
