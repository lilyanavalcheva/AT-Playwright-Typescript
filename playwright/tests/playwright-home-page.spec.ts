import { test, expect } from "playwright/test";

test("Has logo exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // get image by alt text
  const logo = page.getByAltText("Playwright logo").first();

  await expect(logo).toBeVisible();
});

test("Has heading exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // locate heading one by locator tag name
  const headingtitle = page.locator("h1");
  // log in the test results located element value
  console.log((await headingtitle.innerText()).valueOf());
  await expect(headingtitle).toBeVisible();
});

test("Have navigation links exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // locate navigation link Docs by role and text
  const docsLink = page.getByRole("link", { name: "Docs" });
  const apiLink = page.getByRole("link", { name: "API" });
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Click Community link and chech the path", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // locate navigation link Community by role and text
  const communityLink = page.getByRole("link", { name: "Community" });
  // click the located element
  await communityLink.click();
  // expect the current page to have passed url
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
  await expect(headingTwo).toBeVisible();
});

test("check if logos list exists", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // locate logos list by locator class name syntax
  const logosListItems = page.locator("ul.logosList_zAAF li");
  // expect the count of list items
  await expect(logosListItems).toHaveCount(9);
});
