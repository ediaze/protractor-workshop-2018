import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  specs: ['../test/*.spec.js'],
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
