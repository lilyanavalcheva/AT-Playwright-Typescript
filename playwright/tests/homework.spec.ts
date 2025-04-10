import { test, expect, Page } from "@playwright/test";

test.describe("Test login form", () => {
  test.beforeEach("Navigate to the login form page", async ({ page }) => {
    const loginPage = process.env.LOGIN_PAGE as string;
    await page.goto(loginPage, { timeout: 60000 });
  });

  test("Positive login test", async ({ page }) => {
    await test.step("Enter a valid username", async () => {
      const usernameField = page.locator("#username");
      await expect(usernameField).toBeVisible();
      const usernameTest = process.env.USERNAME_TEST as string;
      await usernameField.fill(usernameTest);
      await expect(usernameField).toHaveValue(usernameTest);
    });
    await test.step("Enter a valid password", async () => {
      const passwordField = page.locator("#password");
      await expect(passwordField).toBeVisible();
      const passwordTest = process.env.PASSWORD_TEST as string;
      await passwordField.fill(passwordTest);
      await expect(passwordField).toHaveValue(passwordTest);
    });
    await test.step("Submit the form", async () => {
      const submitBtn = page.locator("#submit");
      await expect(submitBtn).toBeVisible();
      await submitBtn.click();
    });
    await test.step("New URL opens", async () => {
      await expect(page).toHaveURL(
        "https://practicetestautomation.com/logged-in-successfully/"
      );
    });
    await test.step("Success message appears", async () => {
      const successMessage = page.getByText(
        "Congratulations student. You successfully logged in!"
      );
      await expect(successMessage).toBeVisible();
      const logOutBtn = page.getByRole("link", { name: "Log out" });
      await expect(logOutBtn).toBeVisible();
    });
  });

  test("Negative username test", async ({ page }) => {
    await test.step("Enter an invalid username", async () => {
      const usernameField = page.locator("#username");
      await expect(usernameField).toBeVisible();
      const incorrectUsername = process.env.INCORRECT_USERNAME as string;
      await usernameField.fill(incorrectUsername);
      await expect(usernameField).toHaveValue(incorrectUsername);
    });
    await test.step("Enter a valid password", async () => {
      const passwordField = page.locator("#password");
      await expect(passwordField).toBeVisible();
      const passwordTest = process.env.PASSWORD_TEST as string;
      await passwordField.fill(passwordTest);
      await expect(passwordField).toHaveValue(passwordTest);
    });
    await test.step("Submit the form", async () => {
      const submitBtn = page.locator("#submit");
      await expect(submitBtn).toBeVisible();
      await submitBtn.click();
    });
    await test.step("Error message about the invalid username appears", async () => {
      const errorMessage = page.locator("#error");
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText("Your username is invalid!");
    });
  });

  test("Negative password test", async ({ page }) => {
    await test.step("Enter a valid username", async () => {
      const usernameField = page.locator("#username");
      await expect(usernameField).toBeVisible();
      const usernameTest = process.env.USERNAME_TEST as string;
      await usernameField.fill(usernameTest);
      await expect(usernameField).toHaveValue(usernameTest);
    });
    await test.step("Enter an invalid password", async () => {
      const passwordField = page.locator("#password");
      await expect(passwordField).toBeVisible();
      const incorrectPassword = process.env.INCORRECT_PASSWORD as string;
      await passwordField.fill(incorrectPassword);
      await expect(passwordField).toHaveValue(incorrectPassword);
    });
    await test.step("Submit the form", async () => {
      const submitBtn = page.locator("#submit");
      await expect(submitBtn).toBeVisible();
      await submitBtn.click();
    });
    await test.step("Error message about the invalid password appears", async () => {
      const errorMessage = page.locator("#error");
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText("Your password is invalid!");
    });
  });
});

test.describe("Test exceptions", () => {
  test.beforeEach("Navigate to the exceptions page", async ({ page }) => {
    const inceptionsPage = process.env.INCEPTIONS_PAGE as string;
    await page.goto(inceptionsPage, { timeout: 60000 });
  });

  test("NoSuchElementException", async ({ page }) => {
    await test.step("Click add button", async () => {
      const addBtn = page.locator("#add_btn");
      await expect(addBtn).toBeVisible();
      await addBtn.click();
    });
    await test.step("Row 2 appears", async () => {
      const rowTwo = page.locator('input[class="input-field"]');
      await expect(rowTwo).toBeVisible();
    });
  });

  test("ElementNotInteractableException", async ({ page }) => {
    await test.step("Click add button", async () => {
      const addBtn = page.locator("#add_btn");
      await expect(addBtn).toBeVisible();
      await addBtn.click();
    });
    await test.step("Fill row 2", async () => {
      const inputFieldTwo = page.locator("input.input-field").nth(1);
      await expect(inputFieldTwo).toBeVisible({ timeout: 10000 });
      await inputFieldTwo.fill("Random Text");
      await expect(inputFieldTwo).toHaveValue("Random Text");
    });
    await test.step("Save and update row 2", async () => {
      const inputFieldTwo = page.locator("input.input-field").nth(1);
      const saveBtn = page.getByRole("button", { name: "Save" });
      await expect(saveBtn).toBeVisible();
      await saveBtn.click();
      await expect(inputFieldTwo).toHaveValue("Random Text");
    });
  });

  test("InvalidElementStateException", async ({ page }) => {
    await test.step("Click edit button", async () => {
      const editBtn = page.locator("#edit_btn");
      await expect(editBtn).toBeVisible();
      await editBtn.click();
    });
    await test.step("Edit row 2", async () => {
      const inputFieldOne = page.locator("input.input-field").first();
      await expect(inputFieldOne).toBeVisible();
      await inputFieldOne.fill("Random Text part 2");
      await expect(inputFieldOne).toHaveValue("Random Text part 2");
    });
    await test.step("Save and update row 2", async () => {
      const inputFieldOne = page.locator("input.input-field").first();
      const saveBtn = page.getByRole("button", { name: "Save" });
      await expect(saveBtn).toBeVisible();
      await saveBtn.click();
      await expect(inputFieldOne).toHaveValue("Random Text part 2");
    });
  });

  test("StaleElementReferenceException", async ({ page }) => {
    await test.step("Instructions text to be visible", async () => {
      const instructionsTextElement = page.locator("#instructions");
      await expect(instructionsTextElement).toBeVisible();
    });
    await test.step("Instructions text disappears", async () => {
      const instructionsTextElement = page.locator("#instructions");
      const addBtn = page.locator("#add_btn");
      await expect(addBtn).toBeVisible();
      await addBtn.click();
      await expect(instructionsTextElement).not.toBeVisible();
    });
  });

  test("TimeoutException", async ({ page }) => {
    await test.step("Click add button", async () => {
      const addBtn = page.locator("#add_btn");
      await expect(addBtn).toBeVisible();
      await addBtn.click();
    });
    await test.step("Row 2 to be visible after a timeout", async () => {
      const inputFieldTwo = page.locator("input.input-field").nth(1);
      await expect(inputFieldTwo).toBeVisible({ timeout: 30000 });
    });
  });
});
