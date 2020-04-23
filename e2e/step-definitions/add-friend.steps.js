// const { defineFeature, loadFeature } = require('jest-cucumber');
// const feature = loadFeature('./e2e/features/add-friend.feature');
// const puppeteer = require('puppeteer');
// let browser = null;
// let page = null;


// defineFeature((feature), (test) => {

//   beforeAll(async () => {
//     //Create page
//     browser = await puppeteer.launch({
//       headless: false,
//       defaultViewport: null
//     });
//     page = await browser.newPage();

//     //Go to main page
//     await page.goto("http://localhost:3000/#/", { waitUntil: "load", timeout: 0 });

//     //Login
//     const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
//     await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
//     let popup = await newPagePromise;

//     expect(popup).toClick("button", { text: "Solid Community" });
//     await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });

//     await popup.type("[name='username']", "aswes1b", { visible: true });
//     await popup.type("[name='password']", "Viade_es1b", { visible: true });
//     await expect(popup).toClick("button", { text: "Log In" });
//   });

//   afterAll(()=>{
//     browser.close();
//   });

//   //Scenario 1
//   test("The user introduces a correct webId", ({ given, when, then, and }) => {

//     given("the friends page", async () => {
//       await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });

//     });

//     when("the user types his new friend's webId", async () => {
//       await page.type("[id='input']", "https://mariomiguel.inrupt.net/profile/card#me", {visible: true});
//       await expect(page).toClick("button", { id: "send-button" });
      
//     });

//     then("the user expects to see him in his friends list", async () => {
//       await expect(page).toMatch("https://mariomiguel.inrupt.net/profile/card#me");
//     });

//   });


//   //Scenario 2
//   test("The user introduces an invalid webId", ({ given, when, then, and }) => {

//     given("the friends page", async () => {
//       await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
//     });

//     when("the user types an inexistent webId", async () => {
//       await page.type("[id='input']", "https://__--!!/profile/card#me", {visible: true});
//       await expect(page).toClick("button", { id: "send-button" });
      
//     });

//     then("an error must appear", async () => {
//       //TODO check if message appears
//       expect(1).toBe(1);
//     });

//     and("the friend is not added", async ()=>{
//       await expect(page).not.toMatch("https://__--!!/profile/card#me");
//     });

//   });

//   //Scenario 3
//   test("The user introduces a webId from an existent friend", ({ given, when, then, and }) => {

//     given("the friends page", async () => {
//       await page.goto("http://localhost:3000/#/friends", { waitUntil: "load", timeout: 0 });
//     });

//     when("the user types a webId of a friend", async () => {
//       await page.type("[id='input']", "https://mariomiguel.inrupt.net/profile/card#me", {visible: true});
//       await expect(page).toClick("button", { id: "send-button" });
      
//     });

//     then("the user must be notified", async () => {
//       //TODO check if message appears
//       expect(1).toBe(1);
//     });

//     and("the friend is not added",async ()=>{
//       await expect(page.$eval('https://mariomiguel.inrupt.net/profile/card#me', el => el ? true : false)).toBeTruthy();
//     });

//   });

// });