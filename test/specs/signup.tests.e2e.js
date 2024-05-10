import { browser } from '@wdio/globals'
import SignUpPage from '../pageobjects/signup.page.js'

describe('SignUp funcionality test', () => {
    beforeEach(async () => {
        await browser.url('https://telnyx.com/sign-up')
    })

    it('should pop up error "This field is required." when signing up with empty email', async () => {

        await SignUpPage.signUpNoEmail()
    })
    it('should pop up error "This field is required." when signing up with empty first name', async () => {

        await SignUpPage.signUpNoFirstName()
    })
    it('should pop up error "This field is required." when signing up with empty last name', async () => {

        await SignUpPage.signUpNoLastName()
    })
    it('should pop up error "Password must be at least 12 characters." when signing up with short password', async () => {

        await SignUpPage.signUpShortPassword()
    })
    it('should pop up error "Password must contain at least one number." when signing up with no number in password', async () => {

        await SignUpPage.signUpNoNumberInPassword()
    })
    it('should pop up error "Password must contain at least one symbol." when signing up with no symbol in password', async () => {

        await SignUpPage.signUpNoSymbolInPassword()
    })
    it('should pop up error "Password must contain at least one upper-case letter." when signing up with no upper-case letter in password', async () => {

        await SignUpPage.signUpNoUpperCaseInPassword()
    })
    it('should pop up error "This field is required." when signing up with empty password', async () => {

        await SignUpPage.signUpWithEmptyPassword()
    })
    it('should pop up error "Please accept the terms and conditions" when signing up without confirming terms', async () => {

        await SignUpPage.signUpWithoutTermsConfirm()
    })
   
})

