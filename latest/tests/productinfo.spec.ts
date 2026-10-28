import {test,expect} from "../src/fixtures/pageFixtures.js";

test.beforeEach(async ({loginPage})=>
{    
        await loginPage.goToLoginPage();
        await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test("Verify Product Images Count Test", async({homePage, searchResultPage, productInfoPage})=>
{
   await homePage.doSearch("macbook");
   await searchResultPage.selectAndClickOnProduct("MacBook Air");

   let imagesCount=await productInfoPage.getProductImagesCount();

   expect(imagesCount).toBeGreaterThan(1);

})

test("Verify Product Infomation Test", async({homePage, searchResultPage, productInfoPage})=>
{
   await homePage.doSearch("macbook");
   await searchResultPage.selectAndClickOnProduct("MacBook Pro");

   let completeInfo=await productInfoPage.getProductCompleteInfo();

   console.log(completeInfo);
   expect.soft(completeInfo.get("Brand")).toBe("Apple");
   expect.soft(completeInfo.get("Product Code")).toBe("Product 18");
   expect.soft(completeInfo.get("Reward Points")).toBe("800");
   expect.soft(completeInfo.get("Availability")).toBe("In Stock");
   expect.soft(completeInfo.get("Product Price")).toBe("$2,000");

})

// Common Functionality test
test("Verify Common Logo Test", async({productInfoPage})=>
{

   let isVisible=await productInfoPage.isLogoVisible();

   expect(isVisible).toBe(true);

})

test("Verify Common Footers Count Test", async({productInfoPage})=>
{

   let footerCount=await productInfoPage.getPageFootersCount();

   expect(footerCount).toBe(15);

})