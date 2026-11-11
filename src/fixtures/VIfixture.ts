
import {Page, test as base, expect} from '@playwright/test'
import { HomePage } from '../pages/Homepage';
import { EnterVehicleDataPage } from '../pages/EnterVehicleDataPages';
import {EnterInsurantDataPage} from '../pages/EnterInsurantDataPage';
import { EnterProductData } from '../pages/EnterProductDatapage';
import { SelectPrice } from '../pages/SelectPriceOptionPage';
import { SendQuoteClass } from '../pages/SendQuotePage';


type MyFixtures = {
                homepage: HomePage,
                VechileDataPage: EnterVehicleDataPage,
                InsurantDataPage:EnterInsurantDataPage,
                ProductPage: EnterProductData,
                pricepage:SelectPrice,
                QuotePage: SendQuoteClass,
}

export const test = base.extend<MyFixtures>({
    homepage: async({page}: {page: Page}, use)=>{
        const homepage = new HomePage(page);
        await use(homepage);
    },

    // Vehicle Data
        VechileDataPage: async({page}: {page: Page}, use)=>{
        const VechileDataPage = new EnterVehicleDataPage(page);
        await use(VechileDataPage);
    },

    // Insurant Data
        InsurantDataPage: async({page}: {page: Page}, use)=>{
        const InsurantDataPage = new EnterInsurantDataPage(page);
        await use(InsurantDataPage);
    },

    // Product Data
        ProductPage: async({page}: {page: Page}, use)=>{
        const ProductPage = new EnterProductData(page);
        await use(ProductPage);
    },

    // Select Price
        pricepage: async({page}: {page: Page}, use)=>{
        const pricepage = new SelectPrice(page);
        await use(pricepage);
    },

    // Send quote
        QuotePage: async({page}: {page: Page}, use)=>{
        const QuotePage = new SendQuoteClass(page);
        await use(QuotePage);
    },

})