# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productinfo.spec.ts >> Verify Product Infomation Test
- Location: tests\productinfo.spec.ts:20:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "$2,000"
Received: "$2,000.00"
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e4]:
      - list [ref=f3e6]:
        - listitem [ref=f3e7]:
          - link "$ Currency " [ref=f3e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=f3e11]: $
            - text: Currency
            - generic [ref=f3e12]: 
        - listitem
      - list [ref=f3e14]:
        - listitem [ref=f3e15]:
          - link " +91 98765 43210" [ref=f3e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=f3e17]: 
            - text: +91 98765 43210
        - listitem [ref=f3e18]:
          - link " My Account " [ref=f3e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f3e21]: 
            - text: My Account
            - generic [ref=f3e22]: 
        - listitem [ref=f3e23]:
          - link " Wish List (0)" [ref=f3e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=92dfd2f97a536a28f36ebd818a
            - generic [ref=f3e25]: 
            - text: Wish List (0)
        - listitem [ref=f3e26]:
          - link " Shopping Cart" [ref=f3e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=f3e28]: 
            - text: Shopping Cart
        - listitem [ref=f3e29]:
          - link " Checkout" [ref=f3e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=f3e31]: 
            - text: Checkout
  - banner [ref=f3e32]:
    - generic [ref=f3e34]:
      - link [ref=f3e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=f3e38]
      - generic [ref=f3e40]:
        - textbox "Search" [ref=f3e41]: macbook
        - button "" [ref=f3e42] [cursor=pointer]
      - generic [ref=f3e45]:
        - button " 3 item(s) - $4,123.20" [ref=f3e46] [cursor=pointer]:
          - generic [ref=f3e47]: 
          - text: 3 item(s) - $4,123.20
        - text:    
  - main [ref=f3e48]:
    - navigation [ref=f3e50]:
      - text: 
      - list [ref=f3e52]:
        - listitem [ref=f3e53]:
          - link "Desktops" [ref=f3e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=f3e55]:
          - link "Laptops & Notebooks" [ref=f3e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=f3e57]:
          - link "Components" [ref=f3e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=f3e59]:
          - link "Tablets" [ref=f3e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=f3e61]:
          - link "Software" [ref=f3e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=f3e63]:
          - link "Phones & PDAs" [ref=f3e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=f3e65]:
          - link "Cameras" [ref=f3e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=f3e67]:
          - link "MP3 Players" [ref=f3e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=f3e69]:
      - list [ref=f3e70]:
        - listitem [ref=f3e71]:
          - link "" [ref=f3e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=f3e74]:
          - link "Search" [ref=f3e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=product/search&search=macbook
        - listitem [ref=f3e76]:
          - link "MacBook Pro" [ref=f3e77] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/product/macbook-pro?search=macbook
      - generic [ref=f3e79]:
        - generic [ref=f3e80]:
          - generic [ref=f3e82]:
            - link [ref=f3e83] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_pro_1-800x800.jpg
              - img "MacBook Pro" [ref=f3e84]
            - generic [ref=f3e85]:
              - link [ref=f3e86] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_pro_4-800x800.jpg
                - img "MacBook Pro" [ref=f3e87]
              - link [ref=f3e88] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_pro_3-800x800.jpg
                - img "MacBook Pro" [ref=f3e89]
              - link [ref=f3e90] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_pro_2-800x800.jpg
                - img "MacBook Pro" [ref=f3e91]
          - generic [ref=f3e92]:
            - heading "MacBook Pro" [level=1] [ref=f3e93]
            - list [ref=f3e94]:
              - listitem [ref=f3e95]:
                - text: "Brand:"
                - link "Apple" [ref=f3e96] [cursor=pointer]:
                  - /url: https://opencart.nltechtrainings.com/en-gb/apple?route=product/manufacturer.info
              - listitem [ref=f3e97]: "Product Code: Product 18"
              - listitem [ref=f3e98]: "Reward Points: 800"
              - listitem [ref=f3e99]: "Availability: In Stock"
            - paragraph [ref=f3e101]:
              - generic [ref=f3e102]: 
              - generic [ref=f3e104]: 
              - generic [ref=f3e106]: 
              - generic [ref=f3e108]: 
              - generic [ref=f3e110]: 
              - link "0 reviews" [ref=f3e112] [cursor=pointer]:
                - /url: "#"
              - text: /
              - link "Write a review" [ref=f3e113] [cursor=pointer]:
                - /url: "#"
            - list [ref=f3e114]:
              - listitem [ref=f3e115]:
                - heading "$2,000.00" [level=2] [ref=f3e116]
              - listitem [ref=f3e117]: "Ex Tax: $2,000.00"
            - generic [ref=f3e119]:
              - button "" [ref=f3e120] [cursor=pointer]
              - button "" [ref=f3e122] [cursor=pointer]
            - generic [ref=f3e127]:
              - generic [ref=f3e128]: Qty
              - textbox [ref=f3e129]: "1"
              - button "Add to Cart" [ref=f3e130] [cursor=pointer]
        - tablist [ref=f3e131]:
          - tab "Description" [selected] [ref=f3e132] [cursor=pointer]
          - tab "Reviews (0)" [ref=f3e133] [cursor=pointer]
        - generic [ref=f3e134]:
          - tabpanel [ref=f3e135]:
            - generic [ref=f3e137]:
              - paragraph [ref=f3e138]: Latest Intel mobile architecture
              - paragraph [ref=f3e139]: Powered by the most advanced mobile processors from Intel, the new Core 2 Duo MacBook Pro is over 50% faster than the original Core Duo MacBook Pro and now supports up to 4GB of RAM.
              - paragraph [ref=f3e140]: Leading-edge graphics
              - paragraph [ref=f3e141]: The NVIDIA GeForce 8600M GT delivers exceptional graphics processing power. For the ultimate creative canvas, you can even configure the 17-inch model with a 1920-by-1200 resolution display.
              - paragraph [ref=f3e142]: Designed for life on the road
              - paragraph [ref=f3e143]: Innovations such as a magnetic power connection and an illuminated keyboard with ambient light sensor put the MacBook Pro in a class by itself.
              - paragraph [ref=f3e144]: Connect. Create. Communicate.
              - paragraph [ref=f3e145]: Quickly set up a video conference with the built-in iSight camera. Control presentations and media from up to 30 feet away with the included Apple Remote. Connect to high-bandwidth peripherals with FireWire 800 and DVI.
              - paragraph [ref=f3e146]: Next-generation wireless
              - paragraph [ref=f3e147]: Featuring 802.11n wireless technology, the MacBook Pro delivers up to five times the performance and up to twice the range of previous-generation technologies.
          - text: "* * *"
  - contentinfo [ref=f3e148]:
    - generic [ref=f3e149]:
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - heading "Information" [level=5] [ref=f3e152]
          - list [ref=f3e153]:
            - listitem [ref=f3e154]:
              - link "Terms & Conditions" [ref=f3e155] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=f3e156]:
              - link "Delivery Information" [ref=f3e157] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=f3e158]:
              - link "About Us" [ref=f3e159] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=f3e160]:
              - link "Privacy Policy" [ref=f3e161] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=f3e162]:
          - heading "Customer Service" [level=5] [ref=f3e163]
          - list [ref=f3e164]:
            - listitem [ref=f3e165]:
              - link "Contact Us" [ref=f3e166] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=f3e167]:
              - link "Returns" [ref=f3e168] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=f3e169]:
              - link "Site Map" [ref=f3e170] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=f3e171]:
          - heading "Extras" [level=5] [ref=f3e172]
          - list [ref=f3e173]:
            - listitem [ref=f3e174]:
              - link "Brands" [ref=f3e175] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=f3e176]:
              - link "Affiliate" [ref=f3e177] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate&customer_token=92dfd2f97a536a28f36ebd818a
            - listitem [ref=f3e178]:
              - link "Specials" [ref=f3e179] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special&customer_token=92dfd2f97a536a28f36ebd818a
        - generic [ref=f3e180]:
          - heading "My Account" [level=5] [ref=f3e181]
          - list [ref=f3e182]:
            - listitem [ref=f3e183]:
              - link "My Account" [ref=f3e184] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account&customer_token=92dfd2f97a536a28f36ebd818a
            - listitem [ref=f3e185]:
              - link "Order History" [ref=f3e186] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order&customer_token=92dfd2f97a536a28f36ebd818a
            - listitem [ref=f3e187]:
              - link "Wish List" [ref=f3e188] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=92dfd2f97a536a28f36ebd818a
            - listitem [ref=f3e189]:
              - link "Newsletter" [ref=f3e190] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter&customer_token=92dfd2f97a536a28f36ebd818a
      - separator [ref=f3e191]
      - paragraph [ref=f3e192]:
        - text: Powered By
        - link "OpenCart" [ref=f3e193] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
```

# Test source

```ts
  1  | import {test,expect} from "../src/fixtures/pageFixtures.js";
  2  | 
  3  | test.beforeEach(async ({loginPage})=>
  4  | {    
  5  |         await loginPage.goToLoginPage();
  6  |         await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  7  | })
  8  | 
  9  | test("Verify Product Images Count Test", async({homePage, searchResultPage, productInfoPage})=>
  10 | {
  11 |    await homePage.doSearch("macbook");
  12 |    await searchResultPage.selectAndClickOnProduct("MacBook Air");
  13 | 
  14 |    let imagesCount=await productInfoPage.getProductImagesCount();
  15 | 
  16 |    expect(imagesCount).toBeGreaterThan(1);
  17 | 
  18 | })
  19 | 
  20 | test("Verify Product Infomation Test", async({homePage, searchResultPage, productInfoPage})=>
  21 | {
  22 |    await homePage.doSearch("macbook");
  23 |    await searchResultPage.selectAndClickOnProduct("MacBook Pro");
  24 | 
  25 |    let completeInfo=await productInfoPage.getProductCompleteInfo();
  26 | 
  27 |    console.log(completeInfo);
  28 |    expect.soft(completeInfo.get("Brand")).toBe("Apple");
  29 |    expect.soft(completeInfo.get("Product Code")).toBe("Product 18");
  30 |    expect.soft(completeInfo.get("Reward Points")).toBe("800");
  31 |    expect.soft(completeInfo.get("Availability")).toBe("In Stock");
> 32 |    expect.soft(completeInfo.get("Product Price")).toBe("$2,000");
     |                                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  33 | 
  34 | })
  35 | 
  36 | // Common Functionality test
  37 | test("Verify Common Logo Test", async({productInfoPage})=>
  38 | {
  39 | 
  40 |    let isVisible=await productInfoPage.isLogoVisible();
  41 | 
  42 |    expect(isVisible).toBe(true);
  43 | 
  44 | })
  45 | 
  46 | test("Verify Common Footers Count Test", async({productInfoPage})=>
  47 | {
  48 | 
  49 |    let footerCount=await productInfoPage.getPageFootersCount();
  50 | 
  51 |    expect(footerCount).toBe(15);
  52 | 
  53 | })
```