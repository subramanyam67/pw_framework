
import {test} from '../src/fixtures/VIfixture';
import path from 'path';
import {HomePage} from '../src/pages/Homepage';
import { ExcelReader } from '../src/readers/ExcelReader';
import {EnterVehicleDataPage} from '../src/pages/EnterVehicleDataPages';
import {EnterInsurantDataPage} from '../src/pages/EnterInsurantDataPage';
import { EnterProductData } from '../src/pages/EnterProductDatapage';
import { SelectPrice } from '../src/pages/SelectPriceOptionPage';
import { SendQuoteClass } from '../src/pages/SendQuotePage';

// Read the Excel Data:
const XLFilePath = path.join(__dirname, '../src/test-data/automobile.xlsx');
const data: ExcelReader[] = ExcelReader.readExcel(XLFilePath, 'TestData');
for(let i in data){
    console.log(data[i]);
}

test("click on automobile",async({page, homepage})=>{
    // create object for homepage
    const home = new HomePage(page);
    await home.navigateToApplication();
    await home.clickAutomobile();

    // Read ExcelData: Enter Vehicle Data
    const EVData = new EnterVehicleDataPage(page);
    // XL Data Stored in Array 
    for(let i in data){
    console.log(data[i]);
    await EVData.enterVehicleData(data[i]);
    }
    await EVData.clickNext();


    // Enter Insurant Data: (Xl Data, Interface, PAGE, Xl Reader)
    const EIdata = new EnterInsurantDataPage(page);
    for(let i in data){
    console.log(data[i]);
    await EIdata.enterInsurantData(data[i]);
    }
    await EIdata.clickNext();
await page.waitForTimeout(5000);

    // Enter Product  Data: (Xl Data, Interface, PAGE, Xl Reader)
    const EPdata = new EnterProductData(page);
    for(let i in data){
    console.log(data[i]);
    await EPdata.EnterProductDataAuto(data[i]);
    await EPdata.MeritCurt(data[i]);
    }
    await EPdata.clickProductData();

    await page.waitForTimeout(5000);

    // Select Price Option
    const SPdata = new SelectPrice(page);
    for(let i in data){
    console.log(data[i]);
    await SPdata.SelectPrice(data[i]);
    }
    await SPdata.clickSendQuote();
    
    await page.waitForTimeout(5000);

        // Send Quotes
    const SQdata = new SendQuoteClass(page);
    for(let i in data){
    console.log(data[i]);
    await SQdata.SendQuote(data[i]);
    }
    await SQdata.SendQuotebtn();
    
    await page.waitForTimeout(5000);

});

test("E2E Flow Truck Insurance",async({page, homepage, VechileDataPage,
                InsurantDataPage,
                ProductPage,
                pricepage,
                QuotePage,})=>{

        // Step1: Home Page - click on Truck
        await homepage.navigateToApplication();
        await homepage.clickTruck();

        // Step 2: Enter Vehicle Data
        await VechileDataPage.enterVehicleData(data[0]);
        await VechileDataPage.trucfields(data[0]);
        await VechileDataPage.clickNext();

        // Step3: Enter Insurant Data
        await InsurantDataPage.enterInsurantData(data[0]);
        await InsurantDataPage.clickNext();
        

        // step4: Enter Product Data
        await ProductPage.EnterProductDataAuto(data[0]);
        await ProductPage.clickProductData();

        // Step 5: Select Price
        await pricepage.SelectPrice(data[0]);
        await pricepage.clickSendQuote();

        // Step:5 Send Quote:
        const username = process.env.QUOTE_USERNAME;
        const password = process.env.QUOTE_PASSWORD;

        await QuotePage.SendQuote(data[0]);
        await QuotePage.SendQuotebtn();

        await page.waitForTimeout(5000);
    
});

                 
