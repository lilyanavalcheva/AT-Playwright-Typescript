import { test, expect } from "@playwright/test";

test("API Test - GET Products", async ({ request }) => {
  const requestURL = "https://fakestoreapi.com/products";
  const response = await request.get(requestURL);
  const responseBody = await response.json();
  await expect(response.ok()).toBeTruthy();
  await expect(response.status()).toBe(200);
  await expect(responseBody).toContainEqual(
    expect.objectContaining({
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    })
  );
});
