const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./e2e/features/app-homepage.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  test('The user is not logged in the site', ({given,when,then}) => {
    
    let email;

    given('A not logged in user', () => {
    //   email = "newuser@test.com"
    });

    when('I go to the main page of the app', async () => {
        await page.goto('http://localhost:3000/welcome')
    });

    then('The login page should appear', async () => {
      await expect(page).toMatchElement('a', { href: 'https://solid.inrupt.com/get-a-solid-pod' })
    });
  });


  test('The user is already logged in the site', ({ given, when, then }) => {
    
    
  });
});