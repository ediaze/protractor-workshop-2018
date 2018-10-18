import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  framework: 'jasmine',
  specs: ['../test/*.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
