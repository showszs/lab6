const { test, expect } = require('@playwright/test');
test('Перевірка форми входу', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('#username', 'test_user');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await expect(page.locator('#successMessage')).toBeVisible();
  });

test('Перевірка заголовка сторінки', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/TestPage/);
  });
test('Валідація обов’язкових полів форми', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#loginButton');
    const error = await page.evaluate(() => document.querySelector(':invalid'));
    expect(error).not.toBeNull();
  });

test('H1 has correct text', async ({ page }) => {
  await page.goto('http://localhost:3000');   
  const h1 = page.locator('h1'); // шукаємо перший заголовок
  await expect(h1).toHaveText('This is TEST page');   // текст, який очікується
});

  
  