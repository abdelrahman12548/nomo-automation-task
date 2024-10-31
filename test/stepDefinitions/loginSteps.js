import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/LoginPage.js';

Given('I launch the app', async () => {
    await driver.execute('mobile: activateApp', { appId: 'com.saucelabs.mydemoapp.rn' }); // Replace with your app's package name
});

Given('I am on the login page', async () => {
    await LoginPage.waitForLoginPage(driver);
});

When('I enter {string} as the username', async (username) => {
    await LoginPage.enterUsername(username);
});

When('I enter {string} as the password', async (password) => {
    await LoginPage.enterPassword(password);
});

When('I click on the login button', async () => {
    await LoginPage.clickLoginButton();
});

Then('I should see a welcome message', async () => {
    const isWelcomeVisible = await LoginPage.isWelcomeMessageDisplayed();
    expect(isWelcomeVisible).toBe(true);
});

Then('I should see an error message saying {string}', async (errorMessage) => {
    const actualMessage = await LoginPage.getErrorMessage();
    expect(actualMessage).toBe(errorMessage);
});

When('I leave the username and password fields empty', async () => {
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
});
