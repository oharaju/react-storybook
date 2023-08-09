// import { addons } from '@storybook/manager-api';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',

  // Base color
  colorPrimary: '#ffff00',
  colorSecondary: '#f48484',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',
})

addons.setConfig({
  theme,
});