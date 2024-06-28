import { test, expect } from '@playwright/test';
import AppPageV4 from '../../pages/appPages.v4';
import { testDataV4 } from '../../utils/testDataImport';

/***
 * This test is example for the navigation test using appPage wrapper
 */
test('check navigation v4', async ({ page }) => {

  test.info().annotations.push({
    type : ' Test Case Id : ',
    description : 'https://ashishProject.atlassian.net/browse/QA-1437' // Jira Testcase ID
  });

  const appPage = new AppPageV4(page);
  const { username, password } = testDataV4;
  
  await test.step('Log in ', async () => {
    await appPage.loginPage.goto();
    await appPage.loginPage.login(username, password);
  });
  
  await test.step('Verify the People tab navigation', async () => {
    await appPage.loginPage.navigation.clickPeopleTab();
    await expect(appPage.loginPage.navigation.headerTitle).toContainText('People');
  });
  
  await test.step('Verify the Reporting tab navigation', async () => {
    await appPage.loginPage.navigation.clickReportingTab();
    await expect(appPage.loginPage.navigation.headerTitle).toContainText('Reporting');
  });
 
  await test.step('Verify the Suppliers tab navigation', async () => {
    await appPage.loginPage.navigation.clickSuppliersTab();
    await expect(appPage.loginPage.navigation.headerTitle).toContainText('Suppliers');
  });
  
  await test.step('Verify the Organization tab navigation', async () => {
    await appPage.loginPage.navigation.clickOrganizationTab();
    await expect(appPage.loginPage.navigation.headerTitle).toContainText('Organization');
  });
});
