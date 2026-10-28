import {test, expect} from "@playwright/test";

let AUTH_TOKEN={'Authorization':'Bearer cec5b9d5f18030b14a3d81318b360ed2ee4573d227688ee4d48bdbb4c4d4b6e0'};

test("Fetch a single user", async({request})=>
{
    let response=await request.get("https://gorest.co.in/public/v2/users/8684439", {headers:AUTH_TOKEN});

    console.log(response);

    let responseBody=await response.json();
    console.log(responseBody);

    console.log("Response Code is : "+response.status());
    console.log("Response Message is : "+response.statusText());
    
})

test("Fetch data for multiple user", async({request})=>
{
    let response=await request.get("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN});

    console.log(response); // JS Object in return

    let responseBody=await response.json(); // conversion of JS object to JSON string format
    console.log(responseBody);

    console.log("Response Code is : "+response.status());
    console.log("Response Message is : "+response.statusText());
    //expect(response.status).toBe(200);
})



test("creating a user", async({request})=>
{
    let userdata={
      "name": '"rinika"',
    "email": 'rinika@hotmail.com',
    "gender": "female",
    "status": "active"
  }

    let response=await request.post("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN,data:userdata});

    console.log(response); // JS Object in return

    let responseBody=await response.json(); // conversion of JS object to JSON string format
    console.log(responseBody);

    console.log("Response Code is : "+response.status());
    console.log("Response Message is : "+response.statusText());
    //expect(response.status).toBe(200);
})

test("updating a created user", async({request})=>
{
    let userdata={
      "name": "rinika",
    "email": `nltech${Date.now()}@gmail.com`,

    "gender": "female",
    "status": "inactive"
  }

    let response=await request.put("https://gorest.co.in/public/v2/users/8684439", {headers:AUTH_TOKEN,data:userdata});

    console.log(response); // JS Object in return

    let responseBody=await response.json(); // conversion of JS object to JSON string format
    console.log(responseBody);

    console.log("Response Code is : "+response.status());
    console.log("Response Message is : "+response.statusText());
   
})


test("deleting a created user", async({request})=>
{
    

    let response=await request.delete("https://gorest.co.in/public/v2/users/8684439", {headers:AUTH_TOKEN});
    console.log(response); // JS Object in return
    console.log("Response Code is : "+response.status());
    console.log("Response Message is : "+response.statusText());
   
})
