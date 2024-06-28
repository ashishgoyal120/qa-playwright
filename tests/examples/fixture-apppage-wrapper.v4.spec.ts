import { test, expect } from '../../fixtures/fixture';
import { testDataV4 } from '../../utils/testDataImport';
import { encrypt, decrypt } from '../../utils/encryptionHelper';

/***
 * This test is example for the navigation test using Fixture
 */
test('check navigation v4', async ({ appPageV4 }) => {
  const { username, password } = testDataV4;
  await appPageV4.loginPage.goto();
  await appPageV4.loginPage.login(username, password);
  await appPageV4.loginPage.checkTitle();
});

test.skip('Encrypt Password', async ({ appPageV4 }) => {
  const { username, password } = testDataV4;
  const encryptPassword: string = encrypt(password);
  console.log('Encripted Password : ', encryptPassword);
});

test.skip('Decrypt Password', async ({ appPageV4 }) => {
  const { username, password } = testDataV4;
  const decryptedPassword: string = decrypt(password);
  console.log('Decrypted Password : ', decryptedPassword);
});
