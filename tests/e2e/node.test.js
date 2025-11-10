const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сайту', async ({ page }) => {
    await page.goto('https://nodejs.org/uk');
    await expect(page).toHaveTitle(/Node.js — Запускайте JavaScript будь‑де/);
  });

test('Перевірка наявності меню навігації', async ({ page }) => {
    await page.goto('https://nodejs.org/uk');
    const nav = await page.locator('nav');
    await expect(nav).toBeVisible();
  });

test('Перевірка перехід за посиланням', async ({ page }) => {
    await page.goto('https://nodejs.org/uk');
    await page.click('text=Навчання');
    await expect(page).toHaveURL(/learn\/getting-started\/introduction-to-nodejs/);
  });
    