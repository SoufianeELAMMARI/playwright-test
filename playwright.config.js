import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // browser always visible
    slowMo: 100,     // slow down actions for visibility
  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }], // fills test-results/
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ]
});