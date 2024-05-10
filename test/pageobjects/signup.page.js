import { $ } from '@wdio/globals'

class SignUpPage {

    get emailInputField () {
        return $('#email')
    }
    get firstNameInputField () {
        return $('#first_name')
    }
    
    get lastNameInputField () {
        return $('#last_name');
    }
    get passwordInput() {
        return $('#password');
    }
    get termsAndConditions () {
        return $('#terms_and_conditions');
    }
    get subscription () {
        return $('#subscription_opt_in');
    }
    get signUpbutton () {
        return $('button[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]');
    }
    get emptyPassword() {
        return $('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt');
    }

    get emailRequired() {
        return $('#email_message');
    }
    get firstNameRequired() {
        return $('#first_name_message')
    }
    get lastNameRequired() {
        return $('#last_name_message')
    }
    get passwordToShort() {
        return $('#passwordMinLength')
    }
    get noNumberInPassword() {
        return $('#passwordOneNumber')
    }
    get noSymbolInPassword() {
        return $('#passwordOneSymbol')
    }
    get noUpperCaseInPassword() {
        return $('#passwordUpperCase')
    }
    get emptyPassworderror() {
        return $('#required')
    }
    get termsAndConditionsError() {
        return $('#terms_and_conditions_message')
    }

    get acceptCookies () {
        return $('#onetrust-accept-btn-handler')
    }

    async signUpNoEmail () {
        await browser.pause(2000)
        await this.acceptCookies.click()
        await this.firstNameInputField.addValue("Marsel");
        await this.lastNameInputField.addValue("Micro");
        await this.passwordInput.addValue("123#Wecreate!");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.emailRequired).toHaveText('This field is required.')

    }
    async signUpNoFirstName () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.lastNameInputField.addValue("Micro");
        await this.passwordInput.addValue("123#Wecreate!");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.firstNameRequired).toHaveText('This field is required.')

    }
    async signUpNoLastName () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        await this.passwordInput.addValue("123#Wecreate!");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.lastNameRequired).toHaveText('This field is required.')

    }
    async signUpShortPassword () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        (await this.lastNameInputField).addValue("Macro")
        await this.passwordInput.addValue("1!We");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.passwordToShort).toHaveText('Password must be at least 12 characters.')

    }
    async signUpNoNumberInPassword () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        (await this.lastNameInputField).addValue("Macro")
        await this.passwordInput.addValue("!Weconqureall");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.noNumberInPassword).toHaveText('Password must contain at least one number.')

    }
    async signUpNoSymbolInPassword () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        (await this.lastNameInputField).addValue("Macro")
        await this.passwordInput.addValue("1Weconqureall");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.noSymbolInPassword).toHaveText('Password must contain at least one symbol.')

    }
    async signUpNoUpperCaseInPassword () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        (await this.lastNameInputField).addValue("Macro")
        await this.passwordInput.addValue("1!weconqureall");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.noUpperCaseInPassword).toHaveText('Password must contain at least one upper-case letter.')

    }
    async signUpWithEmptyPassword () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        await this.lastNameInputField.addValue("Macro");
        await this.termsAndConditions.click()
        await this.subscription.click()
        await this.signUpbutton.click()
        await expect (this.emptyPassworderror).toHaveText('This field is required.')

    }
    async signUpWithoutTermsConfirm () {
        await this.emailInputField.addValue("Marsel@mail.com");
        await this.firstNameInputField.addValue("Micro");
        await this.lastNameInputField.addValue("Macro");
        await this.passwordInput.addValue("1!WeconqureAll");
        
        await this.signUpbutton.click()
        await expect (this.termsAndConditionsError).toHaveText('Please accept the terms and conditions')

    }


    
    
}

export default new SignUpPage();
