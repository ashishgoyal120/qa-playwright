import { Page, Locator, expect } from '@playwright/test';
import { NavigationV4 } from '../../components/navigation.v4';
import { decrypt } from '../../utils/encryptionHelper';
import { envConfig } from '../../utils/environmentConfig';

export class LoginPageV4 {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;
  readonly productsLabel : Locator;
  navigation: NavigationV4;

  constructor(page: Page) {
    this.page = page;
    this.navigation = new NavigationV4(page);
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.signInButton = page.locator('#login-button');
    this.productsLabel = page.locator('.product_label');
  }

  async goto() {
    // await this.page.goto('https://admin.sample.dev/login');
   // await this.page.goto(envConfig.v4adminUrl + '/login');
    await this.page.goto(envConfig.v4adminUrl);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(decrypt(password));
    await this.signInButton.click();
  }

  async checkTitle() {
    await this.productsLabel.waitFor({state:"visible"});
    await expect(this.page).toHaveTitle('Swag Labs');

  }
}
