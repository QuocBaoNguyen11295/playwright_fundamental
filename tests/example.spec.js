import {test,expect} from '@playwright/test'

test('simple basic test',async ({ page })=>{
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})

test('Click on Element', async ({ page })=>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('input[type="submit"]')
    await expect(page.locator(".alert-error")).toContainText("Login and/or password are wrong.")
})