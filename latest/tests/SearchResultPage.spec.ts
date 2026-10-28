import {test,expect} from "../src/fixtures/pageFixtures.js";
import {CsvHelper} from "../src/utils/csvUtils.js";

test.beforeEach(async ({loginPage})=>
{    
        await loginPage.goToLoginPage();
        await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test("Verify Search Header Functionality Test", async({homePage, searchResultPage})=>
{
   await homePage.doSearch("macbook");  
   let searchHeader:string=await searchResultPage.getSearchResultsPageHeader();

   expect(searchHeader).toContain("macbook");

})

test("Verify Search Functionality Count Test", async({homePage, searchResultPage})=>
{
   await homePage.doSearch("samsung");
   let searchCount:number=await searchResultPage.getSearchResultsCount();

   expect(searchCount).toBeGreaterThan(0);

})

test("Verify Click Product Functionality Test", async({homePage, searchResultPage,page})=>
{
   await homePage.doSearch("macbook");  
   await searchResultPage.selectAndClickOnProduct("MacBook Air");

   await expect(page).toHaveTitle("MacBook Air");

})

//data from CSV
let testdata4:Record<string, string>[]=CsvHelper.readCsv("src/TestData/SearchData.csv")
 
for (let data of testdata4)
{
test(` test with diff product: ${data.Searchkey} ,${data.productName} `,async({page,homePage,searchResultPage})=>{

   
     await homePage.doSearch(data.Searchkey);
   expect(await searchResultPage.getSearchResultsCount()).toBe(Number(data.count));
   await searchResultPage.selectAndClickOnProduct(data.productName);
   await expect(page).toHaveTitle(data.productName);

   
})

}