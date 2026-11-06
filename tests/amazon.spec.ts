import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'Mobile Accessories' }).click();
  await page.getByRole('link', { name: 'Chargers' }).click();
  await page.getByRole('link', { name: '40W Dynamic Power Adapter' }).click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
});