# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.api.spec.ts >> updating a created user
- Location: latest\tests\user.api.spec.ts:56:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | 
  3  | let AUTH_TOKEN={'Authorization':'Bearer cec5b9d5f18030b14a3d81318b360ed2ee4573d227688ee4d48bdbb4c4d4b6e0'};
  4  | 
  5  | test("Fetch a single user", async({request})=>
  6  | {
  7  |     let response=await request.get("https://gorest.co.in/public/v2/users/8684439", {headers:AUTH_TOKEN});
  8  | 
  9  |     console.log(response);
  10 | 
  11 |     let responseBody=await response.json();
  12 |     console.log(responseBody);
  13 | 
  14 |     console.log("Response Code is : "+response.status());
  15 |     console.log("Response Message is : "+response.statusText());
  16 |     
  17 | })
  18 | 
  19 | test("Fetch data for multiple user", async({request})=>
  20 | {
  21 |     let response=await request.get("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN});
  22 | 
  23 |     console.log(response); // JS Object in return
  24 | 
  25 |     let responseBody=await response.json(); // conversion of JS object to JSON string format
  26 |     console.log(responseBody);
  27 | 
  28 |     console.log("Response Code is : "+response.status());
  29 |     console.log("Response Message is : "+response.statusText());
  30 |     //expect(response.status).toBe(200);
  31 | })
  32 | 
  33 | 
  34 | 
  35 | test("creating a user", async({request})=>
  36 | {
  37 |     let userdata={
  38 |       "name": '"rinika"',
  39 |     "email": 'rinika@hotmail.com',
  40 |     "gender": "female",
  41 |     "status": "active"
  42 |   }
  43 | 
  44 |     let response=await request.post("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN,data:userdata});
  45 | 
  46 |     console.log(response); // JS Object in return
  47 | 
  48 |     let responseBody=await response.json(); // conversion of JS object to JSON string format
  49 |     console.log(responseBody);
  50 | 
  51 |     console.log("Response Code is : "+response.status());
  52 |     console.log("Response Message is : "+response.statusText());
  53 |     //expect(response.status).toBe(200);
  54 | })
  55 | 
  56 | test("updating a created user", async({request})=>
  57 | {
  58 |     let userdata={
  59 |       "name": "rinika",
  60 |     "email": `nltech${Date.now()}@gmail.com`,
  61 | 
  62 |     "gender": "female",
  63 |     "status": "inactive"
  64 |   }
  65 | 
  66 |     let response=await request.put("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN,data:userdata});
  67 | 
  68 |     console.log(response); // JS Object in return
  69 | 
> 70 |     let responseBody=await response.json(); // conversion of JS object to JSON string format
     |                      ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  71 |     console.log(responseBody);
  72 | 
  73 |     console.log("Response Code is : "+response.status());
  74 |     console.log("Response Message is : "+response.statusText());
  75 |    
  76 | })
  77 | 
```