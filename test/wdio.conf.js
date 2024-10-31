import allure from '@wdio/allure-reporter';

export const config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4723,
    path: '/',
    specs: ['features/**/*.feature'],
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "RK8W505JWJJ",
        "appium:udid": "RK8W505JWJJ",
        "appium:platformVersion": "11.0",
        "appium:app": "../Android-MyDemoAppRN.1.3.0.build-244.apk",
        "appium:automationName": "UiAutomator2",
        "appium:autoWebview": false,
        "appium:browserName": ""
    }],
    services: ['appium'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['stepDefinitions/**/*.js'], // Path to step definitions
    },
    reporters: [['allure', { outputDir: 'report/allure-results' }]],
};
