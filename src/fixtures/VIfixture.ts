import {Page, test as base, expect} from '@playwright/test'
import {HomePage} from '../pages/Homepage'
import {EnterVehicleDataPages} from '../pages/EnterVehicleDataPages'
import {EnterInsurantDataPage} from '../pages/EnterInsurantDataPage'
import {EnterProductDataPage} from '../pages/EnterProductDatapage'
import {SelectPriceOptionPage} from '../pages/SelectPriceOptionPage'
import {SendQuotePage} from '../pages/SendQuotePage'

type MyFixtures = {
                homepage: HomePage,
                vehicledata: EnterVehicleDataPages,
                insurantdata: EnterInsurantDataPage,
                productdata: EnterProductDataPage,
                pricepage: SelectPriceOptionPage,
                quotepage: SendQuotePage,
}

export const test = base.extend<MyFixtures>({
    homepage: async({page}: {page: Page}, use)=>{
        const homepage = new HomePage(page);
        await use(homepage);

    },

    vehicledata: async({page}:{page: Page},use)=>{
        const vechiledatapage = new EnterVehicleDataPages(page);
        await use(vechiledatapage);

    },

    insurantdata: async({page}:{page: Page},use)=>{
        const insurantdatapage = new EnterInsurantDataPage(page);
        await use(insurantdatapage);

    },

    productdata: async({page}:{page: Page},use)=>{
        const productdatapage = new EnterProductDataPage(page);
        await use(productdatapage);

    },

    pricepage: async({page}:{page: Page},use)=>{
        const pricepage = new SelectPriceOptionPage(page);
        await use(pricepage);

    },

    quotepage: async({page}:{page: Page},use)=>{
        const quotepage = new SendQuotePage(page);
        await use(quotepage);

    },

})
