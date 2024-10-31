// LoginPage.js
class LoginPage {
    // Define selectors for elements on the login page
    get usernameInput() { return $('//android.widget.EditText[@content-desc="Username input field"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="Password input field"]'); }
    get loginButton() { return $('(//android.widget.TextView[@text="Login"])[2]'); }
    get welcomeMessage() { return $('//android.view.ViewGroup[@content-desc="longpress reset app"]/android.widget.ImageView'); }
    get errorMessage() { return $('//android.view.ViewGroup[@content-desc="generic-error-message"]'); }
    get emptyErrorMessage() { return $('//android.view.ViewGroup[@content-desc="Username-error-message"]'); }
    get confirmLogoutButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get logoutButton() { return $('//android.view.ViewGroup[@content-desc="menu item log out"]'); }
    get hamburgerMenu() { return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'); }
    get loginNavButton() { return $('//android.widget.TextView[@text="Log In"]'); }
    get okayLogoutSuccessButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }


    // Method to wait until the login page is displayed
    async waitForLoginPage() {
        await this.hamburgerMenu.click();
        await this.loginNavButton.click();
    }

    // Method to enter username
    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    // Method to enter password
    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    // Method to click the login button
    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Method to check if the welcome message is displayed
    async isWelcomeMessageDisplayed() {        
        await this.hamburgerMenu.click();
        await this.logoutButton.click();
        await this.confirmLogoutButton.click();
        await this.okayLogoutSuccessButton.click();
        return await this.welcomeMessage.isDisplayed();
    }

    // Method to retrieve the error message text
    async getErrorMessage() {
        return await this.errorMessage.getText();
    }

    // Optional: Methods to clear fields
    async clearUsername() {
        await this.usernameInput.clearValue();
    }

    async clearPassword() {
        await this.passwordInput.clearValue();
    }

    // Method to retrieve the error message text
    async emptyErrorMessage() {
        return await this.emptyErrorMessage.getText();
    }
}

// Export the LoginPage instance
export default new LoginPage();
