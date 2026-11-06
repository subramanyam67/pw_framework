import {Page, Locator} from '@playwright/test'
import { VehicleData } from '../utils/vehicleDatamapper';

export class EnterInsurantDataPage{
    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly dateofBirth:Locator;
    readonly gender:Locator;
    readonly streetAddress:Locator;
    readonly country:Locator;
    readonly zipCode:Locator;
    readonly city:Locator;
    readonly occupation:Locator;
    readonly hobbies:Locator;
    readonly website:Locator;
    readonly next:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.dateofBirth = page.locator('#birthdate');
        this.gender = page.locator('#gendermale');
        this.streetAddress = page.locator('#streetaddress');
        this.country = page.locator('#country');
        this.zipCode = page.locator('#zipcode');
        this.city = page.locator('#city');
        this.occupation = page.locator('#occupation');
        this.hobbies = page.locator('#cliffdiving');
        this.website = page.locator('#website');
        this.next = page.locator('#nextenterproductdata');

    }
//Action methods

async EnterInsurantData(data:VehicleData){
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.dateofBirth.fill(data.dateOfBirth);
    await this.gender.click({force:true});
    await this.streetAddress.fill(data.streetAddress);
    await this.country.selectOption(data.country);
    await this.zipCode.fill(data.zipCode);
    await this.city.fill(data.city);
    await this.occupation.selectOption(data.occupation);
    await this.hobbies.click({force:true});
    await this.website.fill(data.website);

}
async clickNext(){
    await this.next.click();
}
}