const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/logout.feature');
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
      });
    
      afterAll(() => {
        browser.close();
      });
      test("The user wants to logout Viade",({given,when,then})=>{
        let popup;
        given("The Welcome page of Viade",async()=>{
            await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });
            const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
            await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
            popup = await newPagePromise;
      
            expect(popup).toClick("button", { text: "Solid Community", timeout: 2000 });
            await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });
      
            await popup.type("[name='username']", "aswes1b", { visible: true });
            await popup.type("[name='password']", "Viade_es1b", { visible: true });
            await expect(popup).toClick("button", { text: "Log In" });
            await page.waitForSelector('img');
            await expect(page.$eval('#welcome-image', el => el ? true : false)).toBeTruthy();
        });
        when("The user press the exit button",async ()=>{
            await expect(page).toClick("button",{className: "sc-pAZqv cuOtHq"});
        });
        then("The user expects to be on the Login page of Viade", async()=>{
            await page.waitForSelector('h1');
            await expect(page).toMatchElement("h1",{id: "login-title"});
        });
      });
});