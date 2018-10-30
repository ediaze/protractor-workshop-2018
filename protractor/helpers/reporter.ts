import { SpecReporter } from 'jasmine-spec-reporter';

const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true
};

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
