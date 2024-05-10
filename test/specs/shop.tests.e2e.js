import { browser } from '@wdio/globals'
import ShopPage from '../pageobjects/shop.page.js'

describe('Shop funcionality test', () => {
    beforeEach(async () => {
        await browser.url('https://shop.telnyx.com/')
    })

    it('check the cart should be empty before shopping first item', async () => {
        await ShopPage.checkCartEmpty()
    })
    it('should add new item to the cart, and item is displayed in the cart', async () => {
        await ShopPage.addItemtoCart()
    })
    it('should remove item from the cart, and cart should become empty', async () =>{
        await ShopPage.removeItemFromCart()
    })
    it('should search for item a, and show relevant search results', async () =>{
        await ShopPage.searchForItem(ShopPage.searchItem.a)
    })
    it('should search for item b, and show relevant search results', async () =>{
        await ShopPage.searchForItem(ShopPage.searchItem.b)
    })
    it('should search for item a, and show relevant search results', async () =>{
        await ShopPage.searchForItem(ShopPage.searchItem.c)
    })
    it('should change currency at country/region menu to Egypt Lyra', async() => {
        await ShopPage.changeCurrencyToEgypt()
    })
    it('should change currency at country/region menu to Germany Euro, and the prices for the good should be in EUR', async() => {
        await ShopPage.changeCurrencyToGermany()
    })
})