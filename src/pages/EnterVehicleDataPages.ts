
import {Page, Locator} from '@playwright/test'
import {VehicleData} from '../utils/VehicleDatamapper'

export class EnterVehicleDataPage{
    readonly page:Page;
    readonly make:Locator;
    readonly enginePerformance:Locator;
    readonly dateofManufacture:Locator;
    readonly numberOfSeats:Locator;
    readonly fuelType:Locator;
    readonly listPrice:Locator
    readonly licensePlateNumber:Locator;
    readonly annualMileage:Locator;
    readonly payload:Locator;
    readonly TotalWeight:Locator;
    readonly Next:Locator;

    constructor(page:Page){
        this.page = page;
        this.make = page.locator('#make');
        this.enginePerformance = page.locator('#engineperformance');
        this.dateofManufacture = page.locator('#dateofmanufacture');
        this.numberOfSeats = page.locator('#numberofseats');
        this.fuelType = page.locator('#fuel');
        this.listPrice = page.locator('#listprice');
        this.licensePlateNumber = page.locator('#licenseplatenumber');
        this.annualMileage = page.locator('#annualmileage');
        this.payload = page.locator('#payload');
        this.TotalWeight = page.locator('#totalweight')
        this.Next = page.locator('#nextenterinsurantdata');

    }
// Actionable Methods:
async enterVehicleData(data:VehicleData){
    await this.make.selectOption(data.make);
    await this.enginePerformance.fill(data.enginePerformance);
    await this.dateofManufacture.fill(data.dateOfManufacture);
    await this.numberOfSeats.selectOption(data.numberOfSeats);
    await this.fuelType.selectOption(data.fuelType);
    await this.listPrice.fill(data.listPrice);
    await this.annualMileage.fill(data.annualMileage);
    await this.licensePlateNumber.fill(data.licensePlateNumber);
}

async trucfields(data:VehicleData){
    await this.payload.fill(String(data.Payload));
    await this.TotalWeight.fill(String(data.Totalweight));
}
async clickNext(){
    await this.Next.click();
}

}