import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};

