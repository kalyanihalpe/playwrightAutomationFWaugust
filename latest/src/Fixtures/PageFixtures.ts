import {test as baseTest} from '@playwright/test';
import { HomePage } from 'src/pages/Homepage.js';
import { LoginPage } from 'src/pages/Loginpage.js';
import {SearchResultsPage} from 'src/pages/SearchResultPage';
import {ProductInfoPage} from "../pages/ProductInfoPage.js";

type pageFixtures = {
    loginPage:LoginPage;
    homePage:HomePage;
    searchResultPage:SearchResultsPage;
    productInfoPage:ProductInfoPage;
}

export let test = baseTest.extend<pageFixtures>({
    // loginPage: async ({loginPage}, use) => {
    //     loginPage = new LoginPage(page);

   loginPage: async ({page}, use)=>
     {
     let loginPage = new LoginPage(page);
     await use(loginPage);
   },
   homePage: async ({page}, use)=>
      {
     let homePage = new HomePage(page);
     await use(homePage);
   },
   searchResultPage:async ({page}, use)=>{
    let searchResultPage=new SearchResultsPage(page);
    await use(searchResultPage)
  },
   productInfoPage: async ({page},use)=>
    {
        let productInfoPage=new ProductInfoPage(page);
        await use(productInfoPage);
    }


})
export {expect} from '@playwright/test';