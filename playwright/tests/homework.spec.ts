import { test, expect, Page } from "@playwright/test";

test.describe("Test login form", () => {
  test.beforeEach("Navigate to the login form page", async ({ page }) => {
    const loginPage = process.env.LOGIN_PAGE as string;
    await page.goto(loginPage, { timeout: 60000 });
  });

  test("Positive login test", async ({ page }) => {
    const usernameField = page.locator("#username");
    await expect(usernameField).toBeVisible();
    const usernameTest = process.env.USERNAME_TEST as string;
    await usernameField.fill(usernameTest);
    await expect(usernameField).toHaveValue(usernameTest);
    const passwordField = page.locator("#password");
    await expect(passwordField).toBeVisible();
    const passwordTest = process.env.PASSWORD_TEST as string;
    await passwordField.fill(passwordTest);
    await expect(passwordField).toHaveValue(passwordTest);
    const submitBtn = page.locator("#submit");
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    const successMessage = page.getByText(
      "Congratulations student. You successfully logged in!"
    );
    await expect(successMessage).toBeVisible();
    const logOutBtn = page.getByRole("link", { name: "Log out" });
    await expect(logOutBtn).toBeVisible();
  });

  test("Negative username test", async ({ page }) => {
    const usernameField = page.locator("#username");
    await expect(usernameField).toBeVisible();
    const incorrectUsername = process.env.INCORRECT_USERNAME as string;
    await usernameField.fill(incorrectUsername);
    await expect(usernameField).toHaveValue(incorrectUsername);
    const passwordField = page.locator("#password");
    await expect(passwordField).toBeVisible();
    const passwordTest = process.env.PASSWORD_TEST as string;
    await passwordField.fill(passwordTest);
    await expect(passwordField).toHaveValue(passwordTest);
    const submitBtn = page.locator("#submit");
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
    const errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Your username is invalid!");
  });

  test("Negative password test", async ({ page }) => {
    const usernameField = page.locator("#username");
    await expect(usernameField).toBeVisible();
    const usernameTest = process.env.USERNAME_TEST as string;
    await usernameField.fill(usernameTest);
    await expect(usernameField).toHaveValue(usernameTest);
    const passwordField = page.locator("#password");
    await expect(passwordField).toBeVisible();
    const incorrectPassword = process.env.INCORRECT_PASSWORD as string;
    await passwordField.fill(incorrectPassword);
    await expect(passwordField).toHaveValue(incorrectPassword);
    const submitBtn = page.locator("#submit");
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
    const errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Your password is invalid!");
  });
});

test.describe("Test exceptions", () => {
  test.beforeEach("Navigate to the exceptions page", async ({ page }) => {
    const inceptionsPage = process.env.INCEPTIONS_PAGE as string;
    await page.goto(inceptionsPage, { timeout: 60000 });
  });

  test("NoSuchElementException", async ({ page }) => {
    const addBtn = page.locator("#add_btn");
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    const rowTwo = page.locator('input[class="input-field"]');
    await expect(rowTwo).toBeVisible();
  });

  test("ElementNotInteractableException", async ({ page }) => {
    const addBtn = page.locator("#add_btn");
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    const inputFieldTwo = page.locator("input.input-field").nth(1);
    await expect(inputFieldTwo).toBeVisible({ timeout: 10000 });
    await inputFieldTwo.fill("Random Text");
    await expect(inputFieldTwo).toHaveValue("Random Text");
    const saveBtn = page.getByRole("button", { name: "Save" });
    await expect(saveBtn).toBeVisible();
    await saveBtn.click();
    await expect(inputFieldTwo).toHaveValue("Random Text");
  });

  test("InvalidElementStateException", async ({ page }) => {
    const editBtn = page.locator("#edit_btn");
    await expect(editBtn).toBeVisible();
    await editBtn.click();
    const inputFieldOne = page.locator("input.input-field").first();
    await expect(inputFieldOne).toBeVisible();
    await inputFieldOne.fill("Random Text part 2");
    await expect(inputFieldOne).toHaveValue("Random Text part 2");
    const saveBtn = page.getByRole("button", { name: "Save" });
    await expect(saveBtn).toBeVisible();
    await saveBtn.click();
    await expect(inputFieldOne).toHaveValue("Random Text part 2");
  });

  test("StaleElementReferenceException", async ({ page }) => {
    const instructionsTextElement = page.locator("#instructions");
    await expect(instructionsTextElement).toBeVisible();
    const addBtn = page.locator("#add_btn");
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    await expect(instructionsTextElement).not.toBeVisible();
  });

  test("TimeoutException", async ({ page }) => {
    const addBtn = page.locator("#add_btn");
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    const inputFieldTwo = page.locator("input.input-field").nth(1);
    await expect(inputFieldTwo).toBeVisible({ timeout: 30000 });
  });
});
