const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/visualize-routes.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;
let page2=null;

defineFeature((feature), (test) => {

    beforeAll(async () => {
        //Create page
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        page = await browser.newPage();

    });

    // afterAll(() => {
    //     browser.close();
    // });

    //Scenario 1
    test("The user has routes in his POD but not loaded", ({ given, when, then, and }) => {

        given("the map page", async () => {
            await page.goto("http://localhost:3000/", { waitUntil: "load", timeout: 100000 });

            const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
            await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
            popup = await newPagePromise;

            expect(popup).toClick("button", { text: "Solid Community" });
            await popup.waitForNavigation({ waitUntil: "load", timeout: 100000 });

            await popup.type("[name='username']", "aswes1b", { visible: true });
            await popup.type("[name='password']", "Viade_es1b", { visible: true });
            await expect(popup).toClick("button", { text: "Log In" });
            
            await page.goto("http://localhost:3000/#/map",{waitUntil: "load", timeout: 0}); 

        });

        when("the user types the folder with routes", async () => {
            await page.waitForSelector('input');
            //await page.type("[id='download-input']", "viade/routes", {visible: true, waitUntil: "load", timeout: 0});
            await page.type("[id='download-input']", "viade/routes", { visible: true });   
            //await page.$eval('#download-input', el => el.value="viade/routes");
        });

        and("press the download button", async () => {
            await new Promise(res => setTimeout(() => {
                console.log("Why don't I run?")
                expect(true).toBe(true)
                res()
              }, 2000));
            const downloadButton = await page.$('[id="download-button"]');
            await downloadButton.click();
            //await expect(page).toClick("button", { id: "download-button" });
        });

        then("the user expects to watch them in the list", async () => {
            await new Promise(res2 => setTimeout(() => {
                console.log("Why don't I run?")
                expect(true).toBe(true)
                res2()
              }, 8000));
            await expect(page).toClick("button", { id: "refresh-button" });
            const liElements = await page.evaluate(() => Array.from(document.querySelectorAll('[class="sc-fznOgF iKkBOy"]'), element => element.textContent));
            await expect(liElements[0]).toContain("Demo");
            //await expect(page).toMatch("demo", { waitUntil: "load", timeout: 0 });
        });

    });


    //Scenario 2
    test("The user has already loaded routes in the app", ({ given, when, then }) => {


        given("the map page with routes loaded", async () => {
            await page.goto("http://localhost:3000/#/map", { waitUntil: "load", timeout: 0 });
            //await page.type("[id='download-input']", "public", { visible: true });
            await expect(page).toClick("button", { id: "download-button" });
            //await expect(page.$eval('#lista').isEmpty()).to.equal(false);

        });

        when("the user press a route name", async () => {
            await expect(page).toClick("button", { text: "test" });
        });

        then("the user expects to watch it drown in the map", async () => {

            await expect(page.$eval('.leaflet-pane leaflet-marker-pane', el => el ? true : false)).toBeTruthy();
        });

    });

});