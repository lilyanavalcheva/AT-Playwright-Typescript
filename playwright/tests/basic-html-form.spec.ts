import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  comments: string;
  dropDownValue: string;
}

const results = {
  username: "testUser",
  password: "secret",
  comments: "Test comment",
  dropDownValue: "dd2",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  // Locate and fill username field
  const usernameInput = page.locator('xpath=//input[@name="username"]');
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(resultsObj.username);
  await expect(usernameInput).toHaveValue(resultsObj.username);
  // Locate and fill password field
  const passwordInput = page.locator(`xpath=//input[@name="password"]`);
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(resultsObj.password);
  await expect(passwordInput).toHaveValue(resultsObj.password);
  // Locate and fill textare field
  const textAreaInput = page.locator(
    `xpath=//*[contains(text(), 'Comments...')]`
  );
  await expect(textAreaInput).toBeVisible();
  await textAreaInput.fill(resultsObj.comments);
  await expect(textAreaInput).toHaveValue(resultsObj.comments);
  // Locate and check the checkbox
  const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();
  // Locate and check the radio button
  const radioItem = page.locator('xpath=//input[@value="rd1"]');
  await expect(radioItem).toBeVisible();
  await radioItem.check();
  await expect(radioItem).toBeChecked();
  // Locate and select the drop down
  const dropdownEl = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdownEl).toBeVisible();
  await dropdownEl.selectOption(resultsObj.dropDownValue);
  await expect(dropdownEl).toHaveValue(resultsObj.dropDownValue);
  // Locate and upload a file
  const uploadButton = page.locator(`xpath=//input[@type="file"]`);
  const filePath = path.resolve(__dirname, "./tests.txt");
  await expect(uploadButton).toBeVisible();
  await uploadButton.setInputFiles(filePath);
};

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

  test("Uploading a file", async ({ page }) => {
    const uploadButton = page.locator(`xpath=//input[@type="file"]`);
    const filePath = path.resolve(__dirname, "./tests.txt");
    await expect(uploadButton).toBeVisible();
    await uploadButton.setInputFiles(filePath);
  });

  test("Test radio items selection", async ({ page }) => {
    const radioItem = page.locator('xpath=//input[@value="rd1"]');
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  test("Click the submit button", async ({ page }) => {
    const submitButton = page.locator('xpath=//input[@value="submit"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
    const newTitle = page.locator(`xpath=//h1`);
    await expect(newTitle).toHaveText("Processed Form Details");
  });

  test("Reset the form", async ({ page }) => {
    const cancelButton = page.locator(`xpath=//input[@type="reset"]`);
    await expect(cancelButton).toBeVisible();
    await fillFields(page, results);
    await cancelButton.click();
    await expect(page.locator('xpath=//input[@name="username"]')).toHaveValue(
      ""
    );
    await expect(page.locator('xpath=//input[@value="cb3"]')).toBeChecked();
  });

  test("Successfully submit the form", async ({ page }) => {
    const submitButton = page.locator('xpath=//input[@value="submit"]');
    await expect(submitButton).toBeVisible();
    await fillFields(page, results);
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
    const newTitle = page.locator(`xpath=//h1`);
    await expect(newTitle).toHaveText("Processed Form Details");
    const userNameValue = page.locator(`xpath=//li[@id="_valueusername"]`);
    await expect(userNameValue).toHaveText(results.username);
    const dropDownValue = page.locator('xpath=//li[@id="_valuedropdown"]');
    await expect(dropDownValue).toHaveText(results.dropDownValue);
  });
});

// Wrap all tests within a describe block to improve structure. - done
// Add a beforeEach hook to avoid repeating page.goto() in every test. - done
// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html). - done
// Locate the Password field, fill it with a test value, and validate the input. - done
// Locate the TextArea field, fill it with a test value, and validate the input. - done
// After the checkbox test, add a similar test for Radio Items. - done
// Finally, submit the form by locating the input with type="submit" and triggering a click action. - done
