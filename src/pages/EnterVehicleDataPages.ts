import { Page,Locator } from "@playwright/test";
import {VehicleData} from '../utils/vehicleDatamapper'

export class EnterVehicleDataPages{
    readonly page: Page;
    readonly make: Locator;
    readonly enginePerformance: Locator;
    readonly dateofManufacture: Locator;
    readonly numberofSeats: Locator;
    readonly fuelType: Locator
    readonly listPrice: Locator;
    readonly licensePlateNumber: Locator
    readonly annualMileage: Locator;
    readonly Payload: Locator;
    readonly TotalWeight: Locator;
    readonly next: Locator;

    constructor(page:Page){
        this.page = page;
        this.make = page.locator('#make');
        this.enginePerformance = page.locator('#engineperformance');
        this.dateofManufacture = page.locator('#dateofmanufacture');
        this.numberofSeats = page.locator('#numberofseats');
        this.fuelType = page.locator('#fuel');
        this.listPrice = page.locator('#listprice');
        this.licensePlateNumber = page.locator('#licenseplatenumber');
        this.annualMileage = page.locator('#annualmileage');
        this.Payload = page.locator('#payload');
        this.TotalWeight = page.locator('#totalweight');
        this.next = page.locator('#nextenterinsurantdata');
    }
//Actionable method:
async enterVehicleData(data:VehicleData){
    await this.make.selectOption(data.make);
    await this.enginePerformance.fill(data.enginePerformance);
    await this.dateofManufacture.fill(data.enginePerformance);
    await this.numberofSeats.selectOption(data.numberOfSeats);
    await this.fuelType.selectOption(data.fuelType);
    await this.listPrice.fill(data.listPrice);
    await this.annualMileage.fill(data.annualMileage);
    await this.licensePlateNumber.fill(data.licensePlateNumber);
    
}

async truckfield(data:VehicleData){
    await this.Payload.fill(String(data.Payload));
    await this.TotalWeight.fill(String(data.TotalWeight));
}

async clicknext(){
    await this.next.click();
}

}