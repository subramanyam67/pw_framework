import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('car');
  await page.getByRole('button', { name: 'cargo pants for men' }).click();
  await page.locator('#anonCarousel3').getByLabel('THE FEBZA Cargo for Men | Cotton cargo pants for men | Regular wear Lower for').click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
});