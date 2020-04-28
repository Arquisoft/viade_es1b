const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/createRoute.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;
let mapPage = null;

const delay = (time) => new Promise((res) => setTimeout(res, 500));

async function mouseClick(page, x, y) {
    await delay();
    await page.mouse.click(x, y);
}

defineFeature((feature), (test) => {

    beforeAll(async () => {
        //Create page
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        page = await browser.newPage();

        await page.goto("http://localhost:3000/", { waitUntil: "load", timeout: 0 });

        const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
        await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
        popup = await newPagePromise;

        expect(popup).toClick("button", { text: "Solid Community", timeout: 0 });
        await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });

        await popup.type("[name='username']", "aswes1b", { visible: true });
        await popup.type("[name='password']", "Viade_es1b", { visible: true });
        await expect(popup).toClick("button", { text: "Log In" });
    });

    afterAll(() => {
        browser.close();
    });

    test("The user creates correctly a route", ({ given, when, then, and }) => {

        given("The create route page", async () => {
            //Go to create route page
            await page.goto("http://localhost:3000/#/createRoute", { waitUntil: "load", timeout: 0 });

        });

        when("the user clicks in some points of the map", async () => {
            await new Promise((res) => setTimeout(res, 3000));

            await mouseClick(page, 500, 500);
            await mouseClick(page, 500, 600);


            await new Promise((res) => setTimeout(res, 5000));

        });

        and("writes a name for the route and press upload", async () => {
            await page.waitForSelector('input');
            await page.type("[id='name']", "testCreate", { visible: true });
            const uploadButton = await page.$('[id="upload-button"]');
            await uploadButton.click();
            await page.waitForSelector('h4', { class: "title", timeout: 0 });
        });

        then("a new route should be created and saved in his POD", async () => {
            //Go to map page
            mapPage = await browser.newPage();
            await mapPage.goto("http://localhost:3000/#/map", { waitUntil: "load", timeout: 0 });

            //Type folder of routes
            await mapPage.waitForSelector('input');
            await mapPage.type("[id='download-input']", "viade/routes", { visible: true });
            await new Promise((res) => setTimeout(() => {
                expect(true).toBe(true)
                res()
            }, 2000));

            //Download routes
            const downloadButton = await mapPage.$('[id="download-button"]');
            await downloadButton.click();

            //Refresh
            await mapPage.waitForSelector('h4', { class: "title", timeout: 0 });
            const refreshButton = await mapPage.$('[id="refresh-button"]');
            await refreshButton.click();

            //Check route created previosly is shown
            await expect(mapPage).toMatch(/testCreate+/, { timeout: 3000 });

            mapPage.close();
        });

    });

    test("The user tries to create a route without name", ({ given, when, then, and }) => {

        given("The create route page", async () => {
            await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });
            //Go to create route page
            await page.goto("http://localhost:3000/#/createRoute", { waitUntil: "load", timeout: 0 });

        });

        when("the user clicks in some points of the map", async () => {

            await new Promise((res) => setTimeout(res, 3000));

            await mouseClick(page, 500, 500);
            await mouseClick(page, 500, 600);

            await new Promise((res) => setTimeout(res, 5000));

        });

        and("does not write a name for the route", async () => {
            await page.waitForSelector('input');

        });

        and("press upload button", async () => {
            const uploadButton = await page.$('[id="upload-button"]');
            await uploadButton.click();
        });

        then("an error message should appear", async () => {
            await page.waitForSelector('h4', { class: "title", timeout: 0 });
        });

    });

    test("The user tries to create a route without points", ({ given, when, then, and }) => {

        given("The create route page", async () => {
            await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });
            //Go to create route page
            await page.goto("http://localhost:3000/#/createRoute", { waitUntil: "load", timeout: 0 });

        });

        when("the user does not click in any point of the map", async () => {
            delay();

            delay();

        });

        and("writes a name for the route", async () => {
            await page.waitForSelector('input');
            await page.type("[id='name']", "testCreate", { visible: true });
        });

        and("press upload button", async () => {
            const uploadButton = await page.$('[id="upload-button"]');
            await uploadButton.click();
        });

        then("an error message should appear", async () => {
            await page.waitForSelector('h4', { class: "title", timeout: 0 });
        });

    });



});