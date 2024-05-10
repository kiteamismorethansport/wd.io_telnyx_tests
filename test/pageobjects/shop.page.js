import { $ } from '@wdio/globals'

class ShopPage {

    get currencyEgypt () {
        return $('li:nth-of-type(64) > .caption-large.disclosure__link.link.link--text')
    }
    get currencyUSA () {
        return $('li:nth-of-type(226) > .caption-large.disclosure__link.link.link--text')
    }
    get currencyGermany () {
        return $('li:nth-of-type(82) > .caption-large.disclosure__link.link.link--text')
    }

    get emptyCart () {
        return $('.icon icon-cart-empty')
    }
    get emptyCartText () {
        return $('.cart__empty-text')
    }

    get cartItem() {
        return $('.cart-item__name h4 break')
    }
    get closeCartButton() {
        return $('//div[@class="cart-drawer__empty-content"]//button[@aria-label="Close"]//*[name()="svg"]')
    }

    get shopLink () { 
        return $('.c-buvHyO-igXgZdb-css > .c-glDvHT > [href="https://shop.telnyx.com"]');
}
    get addToCartBtn () { 
        return $('#quick-add-template--14828910772302__featured-collection-06960027533390')
} 
   get shoppingCartCounter() {
    return $('.cart-count-bubble')
   }
       get cookiesClose () {
        return $('#onetrust-accept-btn-handler')
       }
      get shoppingCartIcon () { 
        return $('#cart-icon-bubble')
      }
       get firstCartItem () {
        return $('tr.cart-item').eq(0)
       }
       get removeItemBtn () { 
        return $('.button.button--tertiary.cart-remove-button')
       }
       get scrollToItems () {
        return $('#Slider-template--14828910772302__featured-collection-0')
       }
       get searchBtn () {
        return $('.modal__toggle-open.icon.icon-search')
       }
       get searchInputField () {
        return $('.search__input.field__input')
       }
       get searchResults () {
        return $('.template-search__results.collection.page-width')
       }
       get clickSearch () {
        return $('.search__button.field__button')
       }
       get clearSearchField () { 
        return $('[aria-label="Clear search term"]')
       }
       get dropdownCurrencyMenu () {
        return $('.disclosure__button.localization-form__select.localization-selector.link.link--text.caption-large')
       }
       get listOfCountries () {
        return $('#FooterCountryList')
       }
       get currencyOpenList () {
        return $('.localization-form__currency')
       }
       get priceAndCurrency () {
        return $('.price-item.price-item--regular')
       }

       searchItem = {
        a : 'Hoodie',
        b : 'Hat',
        c : 'SIM Card'
    }

    currencies = {
        Egypt : 'LE',
        Germany : '€',
        USA : '$'
    }

       async checkCartEmpty () {
        await this.shoppingCartIcon.click()
        await expect (this.emptyCartText).toHaveText("Your cart is empty")
    }

       async addItemtoCart () {
        await this.scrollToItems.scrollIntoView()
        await this.addToCartBtn.click()
        await this.cartItem.isDisplayed()
       }
       async removeItemFromCart () {
        await this.scrollToItems.scrollIntoView()
        await this.addToCartBtn.click()
        await this.cartItem.isDisplayed()
        await this.removeItemBtn.click()
        await expect (this.emptyCartText).toHaveText("Your cart is empty")
       }
       async searchForItem(item){
        await this.searchBtn.click()
        await this.searchInputField.addValue(item)
        await this.clickSearch.click()
        await expect (this.searchResults).toHaveTextContaining(item)
    }

    async changeCurrencyToEgypt() {
        await this.dropdownCurrencyMenu.scrollIntoView()
        await this.dropdownCurrencyMenu.click()
       await this.currencyEgypt.scrollIntoView()
       await this.currencyEgypt.click()
       await this.scrollToItems.scrollIntoView()
       await expect (this.priceAndCurrency).toHaveTextContaining(this.currencies.Egypt)

    }

    async changeCurrencyToGermany() {
        await this.dropdownCurrencyMenu.scrollIntoView()
        await this.dropdownCurrencyMenu.click()
       await this.currencyGermany.scrollIntoView()
       await this.currencyGermany.click()
       await this.scrollToItems.scrollIntoView()
       await expect (this.priceAndCurrency).toHaveTextContaining(this.currencies.Germany)

    }
}

export default new ShopPage();