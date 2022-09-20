import {test,expect} from '@playwright/test'
test.describe('My first test suite',()=>{
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
    
    test('Working with input',async ({ page })=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.type('#user_login','username 111')
        await page.type('#user_password','pass')
        await page.check('#user_remember_me')
        await page.click('input[type="submit"]')
        await expect(page.locator('.alert-error')).toContainText('Login and/or password are wrong.')
    })
    
    test('Assert to verify the element is visible',async ({ page })=>{
        await page.goto('https://www.example.com')
        const header = page.locator('h1')
        await expect(header).toBeVisible()
        
    })
})