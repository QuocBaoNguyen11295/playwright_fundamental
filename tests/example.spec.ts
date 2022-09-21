import {test,expect} from '@playwright/test'
import { loadPage,closePage } from '../helper/helper'
test.describe.parallel('My first test suite @test',()=>{
    test.beforeEach(async ({ page })=>{
        await loadPage(page)
    })
    test.skip('simple basic test @sample',async ({ page })=>{
        await page.goto('https://www.example.com')
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
        //await page.screenshot({path: 'screenshots/test-screenshots/sample-screenshot.png', fullPage: true})
    })
    
    test('Click on Element @click', async ({ page })=>{
        await page.click('#signin_button')
        await page.click('input[type="submit"]')
        await expect(page.locator(".alert-error")).toContainText("Login and/or password are wrong.")
        //await page.screenshot({path: 'screenshots/test-screenshots/click-screenshot.png', fullPage: true})
    })
    
    test('Working with input @input',async ({ page })=>{
        await page.click('#signin_button')
        await page.type('#user_login','username 111')
        await page.type('#user_password','pass')
        await page.check('#user_remember_me')
        await page.click('input[type="submit"]')
        await expect(page.locator('.alert-error')).toContainText('Login and/or password are wrong.')
        //await page.screenshot({path: 'screenshots/test-screenshots/input-screenshot.png', fullPage: true})
    })
    
    test.skip('Assert to verify the element is visible @assert',async ({ page })=>{
        await page.goto('https://www.example.com')
        const header = page.locator('h2')
        await expect(header).toBeVisible()
        //await page.screenshot({path: 'screenshots/test-screenshots/assert-screenshot.png', fullPage: true})
    })
    test.skip('Screenshot for the element @screenshotSingleElement',async ({ page })=>{
        await page.goto('https://www.example.com')
        const element = await page.$('h2')
        //await element?.screenshot({path: 'screenshots/screenshot_single_element.png'})
    })
    test.afterEach(async({ page })=>{
        await closePage(page)
    })
})