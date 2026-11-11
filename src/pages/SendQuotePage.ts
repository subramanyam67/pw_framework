
import {Page, Locator} from '@playwright/test'
import { VehicleData } from '../utils/VehicleDatamapper';


export class SendQuoteClass{
    // properties:
    readonly page:Page;
    readonly EMail:Locator;
    readonly Phone:Locator;
    readonly Username:Locator;
    readonly Password:Locator;
    readonly ConfirmPassword:Locator;
    readonly Comments:Locator;
    readonly Send:Locator;

    constructor(page: Page){
        this.page = page;
        this.EMail = page.locator('#email');
        this.Phone = page.locator('#phone')
        this.Username = page.locator('#username')
        this.Password = page.locator('#password');
        this.ConfirmPassword = page.locator('#password');
        this.Comments = page.locator('#Comments');
        this.Send = page.locator('#sendemail');
    }



async SendQuote(data:VehicleData){
    await this.EMail.fill(data.email);
    await this.Phone.fill(data.phone);
    await this.Username.fill(process.env.QUOTE_USERNAME!);
    await this.Password.fill(process.env.QUOTE_PASSWORD!);
    await this.ConfirmPassword.fill(process.env.QUOTE_PASSWORD!);
    await this.Comments.fill(data.comments);
}



async SendQuotebtn(){
    await this.Send.click();
}

}
