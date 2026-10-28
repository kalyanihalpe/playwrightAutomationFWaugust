# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\users.api.main.spec.ts >> End to End Users API Test Cases >> Create a Fresh User
- Location: tests\apiTests\users.api.main.spec.ts:20:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Nishant Automation"
Received: undefined
```

# Test source

```ts
  1  | import {test, expect} from "../../src/Fixtures/apiFixtures"
  2  | 
  3  | const TOKEN=process.env.API_TOKEN;
  4  | let userId:number;
  5  | 
  6  | let AUTH_TOKEN ={Authorization:`Bearer ${TOKEN}`};
  7  | 
  8  | test.describe.serial("End to End Users API Test Cases", ()=>
  9  | {
  10 | 
  11 | test("Get All Users API Test", async ({apiHelper})=>
  12 | {
  13 |     let response=await apiHelper.getRequest("/public/v2/users",AUTH_TOKEN);
  14 | 
  15 |     console.log(response.responseBody);
  16 |     expect(response.statusCode).toBe(200);
  17 |     expect(response.responseBody.length).toBeGreaterThan(5);
  18 | })
  19 | 
  20 | test("Create a Fresh User", async({apiHelper})=>
  21 | {
  22 |     let userData = {
  23 |                         "name": "Nishant Automation",
  24 |                         "email": `nltech${Date.now()}@gmail.com`,
  25 |                         "gender": "male",
  26 |                         "status": "active"
  27 |                     }
  28 | 
  29 |     let response=await apiHelper.postRequest("/public/v2/users", userData, AUTH_TOKEN);                
  30 | 
  31 |     console.log(response.responseBody);
  32 | 
  33 |     expect(response.statusCode).toBe(201);
  34 | 
> 35 |     expect(response.responseBody.name).toBe(userData.name);
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  36 | 
  37 |     userId=response.responseBody.id;
  38 |     console.log("User Id is : "+userId);
  39 | 
  40 | })
  41 | 
  42 | 
  43 | test("Update the Created User", async({apiHelper})=>
  44 | {
  45 |     let userData = {
  46 |                         "name": "Nishant Goel trainer",
  47 |                         "email": `nltech${Date.now()}@gmail.com`,
  48 |                         "gender": "male",
  49 |                         "status": "active"
  50 |                     }
  51 | 
  52 |     let response=await apiHelper.updateRequest(`/public/v2/users/${userId}`, userData, AUTH_TOKEN);                
  53 | 
  54 |     console.log(response.responseBody);
  55 | 
  56 |     expect(response.statusCode).toBe(200);
  57 | 
  58 |     expect(response.responseBody.name).toBe(userData.name);
  59 | 
  60 |     expect(response.responseBody.status).toBe(userData.status);
  61 | 
  62 | })
  63 | 
  64 | test("Delete the Created User", async({apiHelper})=>
  65 | {
  66 |     let response=await apiHelper.deleteRequest(`/public/v2/users/${userId}`,AUTH_TOKEN);                
  67 | 
  68 |     expect(response.statusCode).toBe(204);
  69 |     expect(response.statusText).toBe("No Content");
  70 | })
  71 | });
```