import {test, expect} from "../../src/Fixtures/apiFixtures"

const TOKEN=process.env.API_TOKEN;
let userId:number;

let AUTH_TOKEN ={Authorization:`Bearer ${TOKEN}`};

test.describe.serial("End to End Users API Test Cases", ()=>
{

test("Get All Users API Test", async ({apiHelper})=>
{
    let response=await apiHelper.getRequest("/public/v2/users",AUTH_TOKEN);

    console.log(response.responseBody);
    expect(response.statusCode).toBe(200);
    expect(response.responseBody.length).toBeGreaterThan(5);
})

test("Create a Fresh User", async({apiHelper})=>
{
    let userData = {
                        "name": "kanu",
                        "email": `nltech${Date.now()}@gmail.com`,
                        "gender": "female",
                        "status": "inactive"
                    }

    let response=await apiHelper.postRequest("/public/v2/users", userData, AUTH_TOKEN);                

    console.log(response.responseBody);

    expect(response.statusCode).toBe(201);

    expect(response.responseBody.name).toBe(userData.name);

    userId=await response.responseBody.id;
    console.log("User Id is : "+userId);

})


test("Update the Created User", async({apiHelper})=>
{
    let userData = {
                        "name": "Nishant Goel trainer",
                        "email": `nltech${Date.now()}@gmail.com`,
                        "gender": "male",
                        "status": "active"
                    }

    let response=await apiHelper.updateRequest(`/public/v2/users/${userId}`, userData, AUTH_TOKEN);                

    console.log(response.responseBody);

    expect(response.statusCode).toBe(200);

    expect(response.responseBody.name).toBe(userData.name);

    expect(response.responseBody.status).toBe(userData.status);

})

test("Delete the Created User", async({apiHelper})=>
{
    let response=await apiHelper.deleteRequest(`/public/v2/users/${userId}`,AUTH_TOKEN);                

    expect(response.statusCode).toBe(204);
    expect(response.statusText).toBe("No Content");
})
});