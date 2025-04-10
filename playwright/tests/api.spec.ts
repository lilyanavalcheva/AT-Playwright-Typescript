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

test.only("API Test - GET Product #5", async ({ request }) => {
  const requestURL5 = "https://fakestoreapi.com/products/5";
  const response5 = await request.get(requestURL5);
  const responseBody5 = await response5.json();
  await expect(response5.ok()).toBeTruthy();
  await expect(response5.status()).toBe(200);
  await expect(responseBody5).toMatchObject(
    expect.objectContaining({
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      id: 5,
      price: 695,
    })
  );
});
