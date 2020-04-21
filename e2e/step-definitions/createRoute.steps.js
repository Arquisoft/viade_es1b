const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/createRoute.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;


defineFeature((feature), (test) => {

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

    test("The user creates correctly a route", ({ given, when, then, and }) => {

        given("The create route page", async () => {
            //Give geolocation permissions
            const context = browser.defaultBrowserContext();
            await context.overridePermissions("http://localhost:3000/#/createRoute", ['geolocation']);

            //Go to create route page
            await page.goto("http://localhost:3000/#/createRoute", { waitUntil: "load", timeout: 0 });
            
            await page.setGeolocation({latitude:90, longitude:0});
        });

        when("the user clicks in some points of the map", async () => {
            await expect(page).toClick("div", { id: "map" });
        });

        and("writes a name for the route and press upload", async () => {
            await page.type("[id='name']", "ejemplo", {visible: true});
            await expect(page).toClick("button", { id: "upload-button" });
        });

        then("a new route should be created and saved in his POD", async () => {
            //TODO
        });

    });

});