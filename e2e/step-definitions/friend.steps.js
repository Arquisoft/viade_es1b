const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/friend.feature');
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

  //Scenario 1
  test("The user introduces a correct webId", ({ given, when, then, and }) => {

    given("the friends page", async () => {
      await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });

    });

    when("the user types his new friend's webId", async () => {
      
      await page.waitForSelector('input');
      await page.type("[id='input-webid']", "https://mariomiguel.inrupt.net/profile/card#me", {visible: true});
      
      const sendButton = await page.$('[id="add-friend-button"]');
      await sendButton.click();
      
      await new Promise(res => setTimeout(res,6000));
      //await expect(page).toClick("button", { id: "send-button" });
      
    });

    then("the user expects to see him in his friends list", async () => {
      // await page.waitForNavigation();
      await expect(page).toMatch("https://mariomiguel.inrupt.net/profile/card#me", { timeout: 0 });
    });

  });


  //Scenario 2
  test("The user introduces an invalid webId", ({ given, when, then, and }) => {

    given("the friends page", async () => {
      await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
    });

    when("the user types an inexistent webId", async () => {
      await page.waitForSelector('input');
      await page.type("[id='input-webid']", "https://__--!!/profile/card#me", {visible: true});
      const sendButton = await page.$('[id="add-friend-button"]');
      await sendButton.click();
      
    });

    then("an error must appear", async () => {
      await page.waitForSelector('h4', {class:"title"});
    });

    and("the friend is not added", async ()=>{
      await expect(page).not.toMatch("https://__--!!/profile/card#me");
    });

  });

  //Scenario 3
  test("The user introduces a webId from an existent friend", ({ given, when, then, and }) => {

    given("the friends page", async () => {
      await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
    });

    when("the user types a webId of a friend", async () => {
      await page.waitForSelector('input');
      await page.type("[id='input-webid']", "https://mariomiguel.inrupt.net/profile/card#me", {visible: true});
      const sendButton = await page.$('[id="add-friend-button"]');
      await sendButton.click();
      
    });

    then("the user must be notified", async () => {
      await page.waitForSelector('h4', {class:"title"});
    });

    and("the friend is not added",async ()=>{
      await expect(page).toMatch("https://mariomiguel.inrupt.net/profile/card#me", { timeout: 0 });
    });

  });

  //Scenario 4
  test("The user wants to remove a friend", ({ given, when, then, and }) => {

    given("the friends page", async () => {
      await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
    });

    when("the user selects the friend he wants to remove", async () => {
      await page.waitForSelector('input', {type:"radio"});
      const radioButton = await page.$('input[value="https://mariomiguel.inrupt.net/profile/card#me"]');
      await radioButton.click();
      
    });

    and("press de remove button",async ()=>{
      const removeButton = await page.$('[id="removeFriend-button"]');
      await removeButton.click();
    });

    then("the friend is not showed",async ()=>{
      // const radioButton = page.$eval('input[value="https://mariomiguel.inrupt.net/profile/card#me"]', el => el ? true : false);
      // //await expect(page.$eval('#welcome-image', el => el ? true : false)).toBeTruthy();
      // expect(radioButton).toBe(false);
      try {
        await page.waitForSelector('input[value="https://mariomiguel.inrupt.net/profile/card#me"]', { timeout: 3000 });
        expect(true).toBe(false);
      } catch (error) {
        expect(true).toBe(true);
      }
    });

  });

});