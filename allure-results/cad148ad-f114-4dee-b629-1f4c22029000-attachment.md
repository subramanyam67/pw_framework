# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Api.spec.ts >> Get the calculator
- Location: tests\Api.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | 
  4  | test ('Get the calculator',async({request})=>{
  5  |     const responce = await request.get('https://webservice.toscacloud.com/soap11/Calculator.svc?wsdl');
  6  | 
  7  |     // console.log(responce);
  8  | 
  9  |     console.log('***status code', responce.status());
  10 | 
  11 |     console.log('****header',responce.headers());
  12 | 
  13 |     console.log('***responce body', responce.body());
  14 | 
> 15 |     expect(responce.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | })
```