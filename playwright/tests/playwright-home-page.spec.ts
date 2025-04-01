import { test, expect } from "playwright/test";

test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url, { timeout: 60000 });
  });

  test("Has logo exist", async ({ page }) => {
    // get image by alt text
    const logo = page.getByAltText("Playwright logo").first();

    await expect(logo).toBeVisible();
  });

  test("Has heading exist", async ({ page }) => {
    // locate heading one by locator tag name
    const headingtitle = page.locator("h1");
    // log in the test results located element value
    console.log((await headingtitle.innerText()).valueOf());
    await expect(headingtitle).toBeVisible();
  });

  test("Have navigation links exist", async ({ page }) => {
    // locate navigation link Docs by role and text
    const docsLink = page.getByRole("link", { name: "Docs" });
    const apiLink = page.getByRole("link", { name: "API" });
    await expect(docsLink).toBeVisible();
    await expect(apiLink).toBeVisible();
  });

  test("Click Community link and chech the path", async ({ page }) => {
    // locate navigation link Community by role and text
    const communityLink = page.getByRole("link", { name: "Community" });
    // click the located element
    await communityLink.click();
    // expect the current page to have passed url
    await expect(page).toHaveURL("https://playwright.dev/community/welcome");
    const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
    await expect(headingTwo).toBeVisible();
  });

  test("Select Playwright env from the list", async ({ page }) => {
    const envInitial = page.getByRole("button", { name: "Node.js" });
    await envInitial.hover();
    const envList = page.locator(".dropdown__menu");
    await expect(envList).toBeVisible;
    const listItem = page.locator("ul.dropdown__menu a").getByText("Python");
    await listItem.click();
    await expect(page).toHaveURL("https://playwright.dev/python/");
  });

  test("check if logos list exists", async ({ page }) => {
    // locate logos list by locator class name syntax
    const logosListItems = page.locator("ul.logosList_zAAF li");
    // expect the count of list items
    await expect(logosListItems).toHaveCount(9);
  });
});
