const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/delete-friend.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature((feature),(test)=>{
    beforeAll(async () => {
        //Create page
        browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null
        });
        page = await browser.newPage();
    
        //Go to main page
        await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });
    
        //Login
        const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
        await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
        let popup = await newPagePromise;
    
        expect(popup).toClick("button", { text: "Solid Community" });
        await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });
    
        await popup.type("[name='username']", "aswes1b", { visible: true });
        await popup.type("[name='password']", "Viade_es1b", { visible: true });
        await expect(popup).toClick("button", { text: "Log In" });
      });
      afterAll(()=>{
        browser.close();
      });
      //Scenario 1
      test("The user wants delete a friend",({ given, when, then, and }) =>{
          given("The friends page",async()=>{
            await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
          });
          when("the user select his friend and click delete botton", async()=>{
            await expect(page).toClick("li", { text: "https://mariomiguel.inrupt.net/profile/card#me" });
            await expect(page).toClick("button",{id:"removeFriend-button"});
          });
          then("the user expects to don't see him in his friends list",async()=>{
            await expect(page).not.toMatch("https://mariomiguel.inrupt.net/profile/card#me");
          })
      })
})