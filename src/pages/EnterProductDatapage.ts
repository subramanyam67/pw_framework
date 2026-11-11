
import {Page, Locator} from '@playwright/test'
import { VehicleData } from '../utils/VehicleDatamapper';


export class EnterProductData{
    // properties:
    readonly page:Page;
    readonly StartDate:Locator;
    readonly InsuranceSum:Locator;
    readonly MeritRating:Locator;
    readonly DamageInsurance:Locator;
    readonly OptionalProducts:Locator;
    readonly CourtesyCar:Locator;
    readonly next:Locator;

    constructor(page: Page){
        this.page = page;
        this.StartDate = page.locator('#startdate');
        this.InsuranceSum = page.locator('#insurancesum')
        this.MeritRating = page.locator('#meritrating')
        this.DamageInsurance = page.locator('#damageinsurance');
        this.OptionalProducts = page.locator('#EuroProtection');
        this.CourtesyCar = page.locator('#courtesycar');
        this.next = page.locator('#nextselectpriceoption');
    }



async EnterProductDataAuto(data:VehicleData){
    await this.StartDate.fill(data.startDate);
    await this.InsuranceSum.selectOption(data.insuranceSum);
    await this.DamageInsurance.selectOption(data.damageInsurance);
    await this.OptionalProducts.check({force:true});
    
}

async MeritCurt(data:VehicleData){
    await this.MeritRating.selectOption(data.meritRating);
    await this.CourtesyCar.selectOption(data.courtesyCar);
}



async clickProductData(){
    await this.next.click();
}

}