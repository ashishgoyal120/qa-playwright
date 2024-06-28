import { Page, test as base } from '@playwright/test';
import AppPageV4 from '../pages/appPages.v4';
//import AppPageV3 from '../pages/appPages.v3';
//import AppPageV2 from '../pages/appPages.v2';

type PageWrapper = {
  //appPageV2: AppPageV2;
  //appPageV3: AppPageV3;
  appPageV4: AppPageV4;
  newPage: Page;
  newPage2: Page;
};

export const test = base.extend<PageWrapper>({
  // appPageV2: async ({ page }, use) => {
  //   await use(new AppPageV2(page));
  // },
  // appPageV3: async ({ page }, use) => {
  //   await use(new AppPageV3(page));
  // },
  appPageV4: async ({ page }, use) => {
    await use(new AppPageV4(page));
  },
  newPage: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
  newPage2: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
});

export { expect } from '@playwright/test';
