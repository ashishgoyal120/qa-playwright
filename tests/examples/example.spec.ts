import { test, expect } from '@playwright/test';
import { testData } from '../../utils/testDataImport';
import { encrypt, decrypt } from '../../utils/encryptionHelper';
import { envConfig, environmentFinal } from '../../utils/environmentConfig';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log(testData);
  const value = encrypt('Testing');
  console.log("After Encription : ", value);
  console.log("After Decription", decrypt(value));
  console.log('Execution Environment  : ' + environmentFinal);
  console.log(envConfig);
});
