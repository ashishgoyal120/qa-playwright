import { Page, Locator } from '@playwright/test';

export class NavigationV4 {
  readonly page: Page;
  readonly Options: Locator;
  readonly reportingTab: Locator;
  readonly suppliersTab: Locator;
  readonly organizationTab: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Options = page.locator('div[class="bm-burger-button"] button');
    this.reportingTab = page.getByRole('tab', { name: 'Reporting' });
    this.suppliersTab = page.getByRole('tab', { name: 'Suppliers' });
    this.organizationTab = page.getByRole('tab', { name: 'Org' });
    this.headerTitle = page.locator('#header_container');
  }

  async clickOptions() {
    await this.Options.click();
  }

  async clickReportingTab() {
    await this.reportingTab.click();
  }

  async clickSuppliersTab() {
    await this.suppliersTab.click();
  }

  async clickOrganizationTab() {
    await this.organizationTab.click();
  }
}
