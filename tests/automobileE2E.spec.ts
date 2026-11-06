// import{test, expect} from '@playwright/test'
import {test} from '../src/fixtures/VIfixture'
import path from 'path';
import{HomePage} from '../src/pages/Homepage';
import {ExcelReader} from '../src/readers/ExcelReader';
// import { VehicleData } from '../src/utils/vehicleDatamapper';
import {EnterVehicleDataPages}from '../src/pages/EnterVehicleDataPages';
import {EnterInsurantDataPage}from '../src/pages/EnterInsurantDataPage';
import {EnterProductDataPage} from '../src/pages/EnterProductDatapage';
import { SelectPriceOptionPage } from '../src/pages/SelectPriceOptionPage';
import { SendQuotePage } from '../src/pages/SendQuotePage';

//read the Excel Data:
const xlfilePath = path.join(__dirname, '../src/test-data/automobile.xlsx');
const data:ExcelReader[] = ExcelReader.readExcel(xlfilePath,'TestData')
for(let i in data){
    console.log(data[i]);
}

test.only('click on automobile',async({page, homepage})=>{
    //create object for homepage
    const home = new HomePage(page);
    await home.navigateToApplication();
    await home.clickAutomobile();

    //entervehicledata:
    const EvData = new EnterVehicleDataPages(page);
    for(let i in data){
    console.log(data[i]);
    await EvData.enterVehicleData(data[i]);

}
await EvData.clicknext();

//enter insurant data:
const EIdata = new EnterInsurantDataPage(page);
for(let i in data){
    console.log(data[i]);
    await EIdata.EnterInsurantData(data[i]);
}
await EIdata.clickNext();
await page.waitForTimeout(5000);

//enter product data:
const EPData = new EnterProductDataPage(page);
for(let i in data){
    console.log(data[i]);
    await EPData.EnterProductData(data[i]);
    await EPData.MeriCurt(data[i]);
}
await EPData.clickNext();
await page.waitForTimeout(5000);

//send quote
const SPData = new  SelectPriceOptionPage(page);
for(let i in data){
    console.log(data[i]);
    await SPData.SelectPrice(data[i]);
}
await SPData.clickSendQuote();
await page.waitForTimeout(5000);

//select price option
const SQData = new  SendQuotePage(page);
for(let i in data){
    console.log(data[i]);
    await SQData.SendQuote(data[i]);
}
await SQData.send.click();


await page.waitForTimeout(5000);
 
})

test('E2E Flow Truck Insurance',async({page, homepage, vehicledata,
                 insurantdata,
                 productdata,
                 pricepage,
                 quotepage,})=>{

        //step1: home page - click on truck
        await homepage.navigateToApplication();
        await homepage.clickTruck();

        //step 2: enter vehicle data
        await vehicledata.enterVehicleData(data[0]);
        await vehicledata.truckfield(data[0]);
        await vehicledata.clicknext();

        //step3: enter insurant data
        await insurantdata.EnterInsurantData(data[0]);
        await insurantdata.clickNext();

        //step4 enter product data
        await productdata.EnterProductData(data[0]);
        await productdata.clickNext();

        //step5 select price 
        await pricepage.SelectPrice(data[0]);
        await pricepage.clickSendQuote();

        //step6 send quote

        const username = process.env.QUOTE_USERNAME;
        const password = process.env.QUOTE_PASSWORD;

        await quotepage.SendQuote(data[0]);
        await quotepage.clickNext();

        await page.waitForTimeout(5000);

});

                 
