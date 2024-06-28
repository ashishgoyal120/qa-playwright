import { Page } from '@playwright/test';
import { LoginPageV4 } from './v4/login.v4.page';
//import { PeoplePageV4 } from './v4/peopleTab.v4.page';
//import { SuppliersPageV4 } from './v4/supplierTab.v4.page';
//import { ReportingPageV4 } from './v4/reportingTab.v4.page';

export default class AppPageV4 {
  loginPage: LoginPageV4;
  //peoplePage: PeoplePageV4;
  //suppliersPage: SuppliersPageV4;
  //reportingPage: ReportingPageV4;

  constructor(page: Page) {
    this.loginPage = new LoginPageV4(page);
    //this.suppliersPage = new SuppliersPageV4(page);
    //this.peoplePage = new PeoplePageV4(page);
    //this.reportingPage = new ReportingPageV4(page);
  }
}
