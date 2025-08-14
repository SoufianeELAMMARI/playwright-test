import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';



test('navigation through Node.js docs', async ({ page }) => {
  await page.goto('https://nodejs.org/fr');

  await page.getByRole('link', { name: 'Apprendre' }).click();

  // Option 1: Check URL
  await expect(page).toHaveURL(/learn/);


});