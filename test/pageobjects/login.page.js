import { $ } from '@wdio/globals'

class LoginPage {

    get emailRequiredField () {
        return $('div[class="LoginForm__FieldContainer-kXONbt eSxLXo"] div[class="TextField__ErrorMessage-sc-r5o2cn-5 iFEVFt"]')
    }
    get passwordRequiredField () {
        return $('div[class="LoginForm__FieldContainer-kXONbt flxMbT"] div[class="TextField__ErrorMessage-sc-r5o2cn-5 iFEVFt"]')
    }
    
    get emailInput () {
        return $('div[class="TextField__InputWrapper-sc-r5o2cn-4 flBpW"]>input[name="email"]');
    }
    get passwordInput() {
        const passwordSelector = $('input[name="password"]');
        return passwordSelector;
    }
    get loginButton () {
        return $('.Button__StyledDefaultButton-sc-44gl5i-0.gBCTym.LoginForm__LoginButton-fhXOmx.eazkBi');
    }
    get welcomePage () {
        return $('[data-page-id="Welcome"]');
    }
    get emptyEmailMessage () {
        return $('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt');
    }
    get emptyPassword() {
        return $('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt');
    }

    async loginNoEmail () {
        await browser.pause(3000)
        await this.passwordInput.addValue("wtf@@33WTF");
        await this.loginButton.click()
        await expect (this.emailRequiredField).toHaveText('Required')

    }
    async loginNoPassword () {
        await browser.pause(3000)
        await this.emailInput.addValue("mail@mail.com");
        await this.loginButton.click()
        await expect (this.passwordRequiredField).toHaveText('Required')
    }
    
    async loginWithEmptyFields () {
        await this.loginButton.click()
        await expect (this.emailRequiredField).toHaveText("Required")
        await expect (this.passwordRequiredField).toHaveText("Required")
    }

    async loginWithCredentials () {
        await this.emailInput.addValue("mail@mail.com");
        await this.passwordInput.addValue("wtf@@33WTF");
        await this.loginButton.click()

    }
    
}

export default new LoginPage();
