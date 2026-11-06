import { Page,Locator } from "@playwright/test";
import {VehicleData} from '../utils/vehicleDatamapper';

export class EnterProductDataPage{
    readonly page:Page;
    readonly startDate:Locator;
    readonly insuranceSum:Locator;
    readonly meritRating:Locator;
    readonly damageInsurance:Locator;
    readonly optionalProducts:Locator;
    readonly courtesyCar:Locator;
    readonly next:Locator;

    constructor(page:Page){
        this.page = page;
        this.startDate = page.locator('#startdate');
        this.insuranceSum = page.locator('#insurancesum');
        this.meritRating = page.locator('#meritrating');
        this.damageInsurance = page.locator('#damageinsurance');
        this.optionalProducts = page.locator('#EuroProtection');
        this.courtesyCar = page.locator('#courtesycar');
        this.next = page.locator('#nextselectpriceoption');
    }
async EnterProductData(data:VehicleData){
    await this.startDate.fill(data.startDate);
    await this.insuranceSum.selectOption(data.insuranceSum);
    await this.damageInsurance.selectOption(data.damageInsurance);
    await this.optionalProducts.check({force:true});
    

}

async MeriCurt(data:VehicleData){
    await this.meritRating.selectOption(data.meritRating);
    await this.courtesyCar.selectOption(data.courtesyCar);

}
async clickNext(){
    await this.next.click();
}
}