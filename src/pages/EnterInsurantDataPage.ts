
import {Page, Locator} from '@playwright/test'
import {VehicleData} from '../utils/VehicleDatamapper'

export class EnterInsurantDataPage{
    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly dateofBirth:Locator;
    readonly gender:Locator;
    readonly streetAddress:Locator;
    readonly country:Locator
    readonly Zipcode:Locator;
    readonly City:Locator;
    readonly occupation: Locator;
    readonly hobby: Locator;
    readonly website: Locator;
    readonly Next:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.dateofBirth = page.locator('#birthdate');
        this.gender = page.locator('[value="Female"]');
        this.streetAddress = page.locator('#streetaddress');
        this.country = page.locator('#country');
        this.Zipcode = page.locator('#zipcode');
        this.City = page.locator('#city');
        this.occupation = page.locator('#occupation');
        this.hobby = page.locator('#cliffdiving');
        this.website = page.locator('#website');
        this.Next = page.locator('#nextenterproductdata');

    }
// Actionable Methods:
async enterInsurantData(data:VehicleData){
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.dateofBirth.fill(data.dateOfBirth);
    await this.gender.click({force:true});
    await this.streetAddress.fill(data.streetAddress);
    await this.country.selectOption(data.country);
    await this.Zipcode.fill(data.zipCode);
    await this.City.fill(data.city);
    await this.occupation.selectOption(data.occupation);
    await this.hobby.check({force:true});
    await this.website.fill(data.website);
}

async clickNext(){
    await this.Next.click();
}

}