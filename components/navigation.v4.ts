import { Page, Locator } from '@playwright/test';

export class NavigationV4 {
  readonly page: Page;
  readonly peopleTab: Locator;
  readonly reportingTab: Locator;
  readonly suppliersTab: Locator;
  readonly organizationTab: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.peopleTab = page.getByRole('tab', { name: 'People' });
    this.reportingTab = page.getByRole('tab', { name: 'Reporting' });
    this.suppliersTab = page.getByRole('tab', { name: 'Suppliers' });
    this.organizationTab = page.getByRole('tab', { name: 'Org' });
    this.headerTitle = page.locator('#header-h1');
  }

  async clickPeopleTab() {
    await this.peopleTab.click();
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
