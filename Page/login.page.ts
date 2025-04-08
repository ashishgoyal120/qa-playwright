import { Locator, Page } from '@playwright/test';
import { testData } from '../utils/testDataImport';
import { environmentConfig } from '../enviornment/environmentConfig';
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login() {
    const { adminUsername, adminPassword } = testData;
    await this.page.waitForLoadState('networkidle');
    await this.page.goto(environmentConfig.adminUrl);
    await this.page.waitForLoadState('networkidle');
    await this.username.fill(adminUsername);
    await this.password.fill(adminPassword);
    await this.loginButton.click();
    await this.page.waitForTimeout(2000);
  }
}
