const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/login.feature');
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
  });

  afterAll(() => {
    browser.close();
  });

  test("The user wants to login into Viade", ({ given, when, then }) => {
    let popup;

    given("The login page", async () => {
      await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });

    });

    when("The user press Log In button and enter his personal data", async () => {

      const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
      await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
      popup = await newPagePromise;

      expect(popup).toClick("button", { text: "Solid Community", timeout: 0 });
      await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });

      await popup.type("[name='username']", "aswes1b", { visible: true });
      await popup.type("[name='password']", "Viade_es1b", { visible: true });
      await expect(popup).toClick("button", { text: "Log In" });
    });

    then("The user expects to be on the Welcome page of ViaDe", async () => {
      await page.waitForSelector('img');
      await expect(page.$eval('#welcome-image', el => el ? true : false)).toBeTruthy();
    });

  });

});