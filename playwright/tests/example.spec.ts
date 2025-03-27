import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
