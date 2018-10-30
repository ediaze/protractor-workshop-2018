import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a page to practice automation', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Edwin',
        lastName: 'Diaz',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/photo.jpg',
        downloadFile: true,
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });
  });
});
