import { test } from '../fixtures/fixture';

test('Login Method', async ({ appPage }) => {
  test.info().annotations.push({
    type: 'Test case Id : ',
    description: 'https://dummy.atlassian.net/browse/QA-488',
  });

  await test.step('Login as admin ', async () => {
    await appPage.loginPage.login();
  });
});
