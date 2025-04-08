import { Page, test as base } from '@playwright/test';
import AppPage from '../Page/appPages';

type PageWrapper = {
  appPage: AppPage;
  newPage: Page;
};

export const test = base.extend<PageWrapper>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },
});

export { expect } from '@playwright/test';
