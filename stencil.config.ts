import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'remtehnaladka',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  devServer: {
    port: 3000,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: '',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
