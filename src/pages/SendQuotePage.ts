import { Page,Locator } from "@playwright/test";

import {VehicleData} from '../utils/vehicleDatamapper';
// import process from "process";

export class SendQuotePage{
    readonly page:Page;
    readonly EMail:Locator;
    readonly Phone:Locator;
    readonly Username:Locator;
    readonly Password:Locator;
    readonly ConfirmPassword:Locator;
    readonly Comments:Locator;
    readonly send:Locator;

    constructor(page:Page){
        this.page = page;
        this.EMail = page.locator('#email');
        this.Phone = page.locator('#phone');
        this.Username = page.locator('#username');
        this.Password = page.locator('#password');
        this.ConfirmPassword = page.locator('#confirmpassword');
        this.Comments = page.locator('#Comments');
        this.send = page.locator('#sendemail');
    }
async SendQuote(data:VehicleData){
    await this.EMail.fill(data.email);
    await this.Phone.fill(data.phone);
    await this.Username.fill(process.env.QUOTE_USERNAME!);
    await this.Password.fill(process.env.QUOTE_PASSWORD!);
    await this.ConfirmPassword.fill(process.env.QUOTE_PASSWORD!);
    await this.Comments.fill(data.comments);

}
async clickNext(){
    await this.send.click();
}
}