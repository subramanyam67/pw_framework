import {Page, Locator} from '@playwright/test'
import process from 'node:process';

export class HomePage{
    //properties
    readonly page: Page
    readonly Automobile:Locator;
    readonly Truck:Locator;
    readonly Camper:Locator;
    readonly Motorcycle:Locator;

    constructor(page: Page){
        this.page = page;
        this.Automobile = page.getByRole('link',{name:'Automobile',exact: true });
        this.Truck = page.getByRole('link',{name:'Truck',exact: true});
        this.Camper = page.getByRole('link',{name:'Camper'});
        this.Motorcycle = page.getByRole('link',{name:'Motorcycle'});
    }

async navigateToApplication() {
    await this.page.goto(process.env.QA_APPLICATION_URL,{"waitUntil":"domcontentloaded"});
}

async clickAutomobile() {
    await this.Automobile.click();
    await this.page.waitForTimeout(2000);
    
}
    
async clickTruck() {
    await this.Truck.click();
}

async clickCamper() {
    await this.Camper.click();
}

async clickMotorCycle() {
    await this.Motorcycle.click();
}


}


