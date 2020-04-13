const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./e2e/features/login.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await page.goto('http://localhost:3000');
    if(await expect(page).toMatchElement('a', { href: '#/map' })){
        await expect(page).toClick('button', {text: 'Log out'});
    }
    
  })

  test('The user has to log in the site', ({given,when,then}) => {
    

    given('The Log in page', async () => {
        await expect(page).toMatchElement('h1', { id: 'login-title' });
    });

    when('I press the LogIn button', async () => {
        const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));	
        await expect(page).toClick('button', { text: 'Log In' });
        popup = await newPagePromise;
      
        console.log(popup.url());
    });

    then('I expect to see a popup to log in', () => {
        expect(popup.title()).resolves.toMatch('Select your Identity Provider');
      
        expect(popup).toMatch("Solid Community", { timeout: 1000 });
        expect(popup).toMatch("Inrupt", { timeout: 1000 });
        expect(popup).toMatch("solid.github.io", { timeout: 1000 });
    });

    // and('After entering my credentials, log in the app', async()=>{

    // });
  });


});