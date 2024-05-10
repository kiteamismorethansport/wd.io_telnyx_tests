import { $ } from '@wdio/globals'

class MainPage {
    
    get acceptCookies () {
        return $('#onetrust-accept-btn-handler')
    }

    get shopLink () {
        return $('.c-buvHyO-igXgZdb-css > .c-glDvHT > [href="https://shop.telnyx.com"]');
    }
    get menuBar () {
        return $('.c-gMsfuT');
    }

    get loginLink () {
        return $('//div[@class="c-buvHyO c-buvHyO-igXgZdb-css"]//a[@class="c-eJcuB mchNoDecorate"][normalize-space()="Log in"]');
    }

    get signUpLink () {
        return $('#header-sign-up > .c-hakyQ');
    }
    get dropDownMenu () {
        return $('//button[@class="c-gMsfuT"]')
    }

    async goToLogin () {
        await this.dropDownMenu.click()
        await this.acceptCookies.click()
        await this.loginLink.click()
    }

    async goToSignUp () {
        await this.signUpLink.click()
    }

    async goToShop () {
        await this.shopLink.click()
    }

}

export default new MainPage();
