import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import MainPage from '../pageobjects/main.page.js'

describe('Login funcionality test', () => {
    beforeEach(async () => {
        await browser.url('https://portal.telnyx.com/')
    })

    it('should pop up error "Required" when logging with empty credentials', async () => {

        await LoginPage.loginWithEmptyFields()
    })

    it('should pop up error "Required" when logging with empty email', async () => {
       await LoginPage.loginNoEmail()
    })

    it('should pop up error "Required" when logging with empty password', async () => {
        await LoginPage.loginNoPassword()
     })
})

