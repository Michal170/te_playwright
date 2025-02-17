import { test } from 'playwright/test';

test('Base navigation', async ({page})=> {
    await page.goto('https://github.com/login');
    await page.waitForTimeout(3000);
    await page.reload();


})

test(('Interacting with Web Element on Gitlab'), async ({page})=>{
    await page.goto('https://github.com/login');
    await page.locator('#login_field').fill('Michal170');
    await page.locator('#password').fill('Rodzina170');
    await page.click('input[value="Sign in"]');
    // await page.getByRole('button', {name: 'Sign in'}).click();
    await page.waitForTimeout(3000);
})