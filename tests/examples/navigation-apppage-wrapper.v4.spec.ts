import { test, expect } from '@playwright/test';
import AppPageV4 from '../../pages/appPages.v4';
import { testDataV4 } from '../../utils/testDataImport';

/***
 * This test is example for the navigation test using appPage wrapper
 */
test('check navigation v4', async ({ page }) => {
  const appPage = new AppPageV4(page);
  const { username, password } = testDataV4;
  await appPage.loginPage.goto();
  await appPage.loginPage.login(username, password);
  // await appPage.loginPage.navigation.clickPeopleTab();
  // await expect(appPage.loginPage.navigation.headerTitle).toContainText('People');
  // await appPage.loginPage.navigation.clickReportingTab();
  // await expect(appPage.loginPage.navigation.headerTitle).toContainText('Reporting');
  // await appPage.loginPage.navigation.clickSuppliersTab();
  // await expect(appPage.loginPage.navigation.headerTitle).toContainText('Suppliers');
  // await appPage.loginPage.navigation.clickOrganizationTab();
  // await expect(appPage.loginPage.navigation.headerTitle).toContainText('Organization');
});
