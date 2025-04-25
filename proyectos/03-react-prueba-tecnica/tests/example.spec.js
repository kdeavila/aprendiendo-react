// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173/';
const ENDPOINT_IMAGE = 'https://cataas.com/cat';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST);

  const textContext = await page.getByRole('paragraph').textContent();
  const imageSrc = await page.getByRole('img').getAttribute('src');

  await expect(textContext?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(ENDPOINT_IMAGE)).toBeTruthy();
});

