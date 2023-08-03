// import { addons } from '@storybook/manager-api';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming'

const theme = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorPrimary: '#ffff00',
  colorSecondary: '#f48484',

  // UI
  appBg: '#ffffff',
  appContentBg: '#dd5588',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',
  textMutedColor: '#FF5F00',



  // Toolbar default and active colors
  // barTextColor: '#DD4411',
  // barSelectedColor: '#45bc5a',
  // barBg: '#ff515d',

  // // Form colors
  // inputBg: '#ff4000',
  // inputBorder: 'rgba(0,0,0,.3)',
  // inputTextColor: '#ff48ff',
  // inputBorderRadius: 4,

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',
  
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,

  // Brand assets
  // brandTitle: 'Newline Storybook',
  // brandUrl: 'https://newline.co',
  // brandImage:
  //   'https://d8dgeb1f3fxgw.cloudfront.net/static/img/logo/newline/newline-logo-longwise-solo-lightbg-gray.svg',
})

addons.setConfig({
  theme,
});