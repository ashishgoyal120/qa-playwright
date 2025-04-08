import { Page } from '@playwright/test';
import { LoginPage } from './login.page';

export default class AppPage {
  loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }
}
