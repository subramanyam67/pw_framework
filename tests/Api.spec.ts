import{test, expect} from '@playwright/test'
import { request } from 'node:http';
import process from 'node:process';


test ('Get the calculator',async({request})=>{
    const responce = await request.get('https://webservice.toscacloud.com/soap11/Calculator.svc?wsdl');

    // console.log(responce);

    console.log('***status code', responce.status());

    console.log('****header',responce.headers());

    console.log('***responce body',await responce.body());

    expect(responce.status()).toBe(200);
})

//rest service

test('post new coffee to the server',async({request})=>{
    const responce = await request.post('https://webservice.toscacloud.com/api/v1/Coffees',
        {
            data:{
                "description": "new coffee Details in hyd",
                "id": 1,
                "name": "Black coffee",
            }
        })
        console.log('status:',responce.status());
        //validate responce
        expect(responce.ok).toBeTruthy();

        const responceBody = await responce.json();
        console.log('responce body ',responceBody);
        console.log('description',responceBody.description);
        console.log('dynamic id', responceBody.id);
        console.log('name',responceBody.name);
})

test("New Coffee the Service Key", async({request})=>{
    const responce = await request.post('api/training/Coffees', {
        params: {
            "key": process.env.SERVICE_KEY!,
       
        },
         data:{
                  "description": "new Coffee Details in HYD",
                  "id": 1,
                  "name": "BlackCoffeee"
             }  


    });


    console.log(process.env.SERVICE_KEY!)
    console.log(responce.status());


    const responceBody =  await responce.json();


    console.log(responceBody);


    console.log(responceBody.description);
    console.log(responceBody.id);
    console.log(responceBody.name);


});
