
import {Page, Locator} from '@playwright/test'
import { VehicleData } from '../utils/VehicleDatamapper';


export class SelectPrice{
    // properties:
    readonly page:Page;
    readonly PriceOption:Locator;
    readonly next:Locator;

    constructor(page: Page){
        this.page = page;
        this.PriceOption = page.locator('input[name="Select Option"]');
        this.next = page.locator('#nextsendquote');
    }

async SelectPrice(data:VehicleData){
    await this.page.locator(`input[name="Select Option"][value="${data.priceOption}"]`).check({force:true});
}



async clickSendQuote(){
    await this.next.click();
}

}