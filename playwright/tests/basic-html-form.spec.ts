import { test, expect } from "@playwright/test";

test.describe("Basic html form", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const homePage = process.env.HOME_PAGE as string;
    await page.goto(homePage, { timeout: 60000 });
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator(`xpath=//h1`);
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator('xpath=//input[@name="username"]');
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  test("Test Checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  test("Test Dropdown selection", async ({ page }) => {
    const dropdownEl = page.locator('xpath=//select[@name="dropdown"]');
    await expect(dropdownEl).toBeVisible();
    await dropdownEl.selectOption("dd2");
    await expect(dropdownEl).toHaveValue("dd2");
  });

  test("Test password field", async ({ page }) => {
    const passwordInput = page.locator(`xpath=//input[@name="password"]`);
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPassword");
    await expect(passwordInput).toHaveValue("testPassword");
  });

  test("Test textarea field", async ({ page }) => {
    const textAreaInput = page.locator(
      `xpath=//*[contains(text(), 'Comments...')]`
    );
    await expect(textAreaInput).toBeVisible();
    await textAreaInput.fill("testTextArea");
    await expect(textAreaInput).toHaveValue("testTextArea");
  });

  test("Test radio items selection", async ({ page }) => {
    const radioItem = page.locator('xpath=//input[@value="rd1"]');
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  test("Submitting the form", async ({ page }) => {
    const submitButton = page.locator('xpath=//input[@value="submit"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
    const newTitle = page.locator(`xpath=//h1`);
    await expect(newTitle).toHaveText("Processed Form Details");
  });
});

// Wrap all tests within a describe block to improve structure. - done
// Add a beforeEach hook to avoid repeating page.goto() in every test. - done
// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html). - done
// Locate the Password field, fill it with a test value, and validate the input. - done
// Locate the TextArea field, fill it with a test value, and validate the input. - done
// After the checkbox test, add a similar test for Radio Items. - done
// Finally, submit the form by locating the input with type="submit" and triggering a click action. - done
