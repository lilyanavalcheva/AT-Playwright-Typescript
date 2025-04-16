import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNamInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNamInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.userNamInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginErrorVisible() {
    await this.errorMessage.waitFor({ state: `visible` });
    return true;
  }
}
