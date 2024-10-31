# Mobile Login Automation

## Setup Instructions

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run Appium server (if not running already):
    ```bash
    appium
    ```
3. Execute tests:
    ```bash
    npx wdio run wdio.conf.js
    ```
4. Generate and view Allure report:
    ```bash
    allure generate report/allure-results --clean -o report/allure-report
    allure open report/allure-report
    ```

## Project Structure
- `test/pageobjects/`: Page Objects using POM.
- `test/features/`: Cucumber feature files.
- `test/stepDefinitions/`: Step definitions for feature files.
- `report/`: Allure report files.
