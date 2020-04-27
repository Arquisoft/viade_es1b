const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/logout.feature');
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

  test("The user wants to logout Viade", ({ given, when, then }) => {

    given("The Welcome page of Viade", async () => {
      await page.goto("http://localhost:3000/#/welcome", { waitUntil: "load", timeout: 0 });

    });

    when("The user press the exit button", async () => {

      await page.waitForSelector('nav', {id:"navBar"});
      await page.evaluate(() => {
        document.querySelector('img[id="nav-bar-logout"]').parentElement.click();
      });

    });

    then("The user expects to be on the Login page of Viade", async () => {
      await page.waitForSelector('h1');
      await expect(page).toMatchElement("h1", { id: "login-title" });
    });

  });

});