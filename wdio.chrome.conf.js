import { config as baseConfig } from './wdio.conf.js'; // Import base configuration using ES6

// Chrome specific capabilities
const config = {
  ...baseConfig,
  reporters: [
    'spec',
    ['allure', {
       outputDir: 'allure-results',
       disableWebdriverStepsReporting: false,
       disableWebdriverScreenshotsReporting: false,
    }],
 ],
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
       args: ['--headless', '--disable-gpu'],
    },
  }]
};

export { config }; //anything new?