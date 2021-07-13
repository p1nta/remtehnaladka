import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'remtehnaladka',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  devServer: {
    port: 3000,
    openBrowser: false,
  },
  bundles: [{
    components: [
      'nice-anim',
      'prog-img',
      'remteh-advantages',
      'remteh-bottom',
      'remteh-case',
      'remteh-clients',
      'remteh-contacts',
      'remteh-directions',
      'remteh-header',
      'remteh-home',
      'remteh-main-projects',
      'remteh-not-found',
      'remteh-projects',
      'remteh-root',
      'remteh-select',
      'remteh-top',
      'remteh-what-we-do',
      'remteh-why-trust',
      'tab-bar',
      'tab-slider',
    ],
  }],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
