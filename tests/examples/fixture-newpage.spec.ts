import { test, expect } from '../../fixtures/fixture';
import AppPageV4 from '../../pages/appPages.v4';
import { testDataV4 } from '../../utils/testDataImport';

/***
 * Fixture Example with App page wrapper and new page
 */
test('Check multiple browser session using fixtures', async ({ appPageV4, newPage }) => {
  const { username, password } = testDataV4;
  await appPageV4.loginPage.goto();
  await appPageV4.loginPage.login(username, password);
  await appPageV4.loginPage.navigation.clickPeopleTab();
  await expect(appPageV4.loginPage.navigation.headerTitle).toContainText('People');

  // It should not be logged in on the new page. This logic can be used for multiple role test cases.

  const appPageWithNewBrowser = new AppPageV4(newPage);
  await appPageWithNewBrowser.loginPage.goto();
  await expect(appPageWithNewBrowser.loginPage.username).toBeVisible();
  await expect(appPageWithNewBrowser.loginPage.username).toBeDisabled();
});
