const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, webkit, firefox } = require('@playwright/test');

const { browserSetup, browserLaunchOptions } = require('./browserConfig');

setDefaultTimeout(60000);


BeforeAll(async()=> {
  
    switch(browserSetup.browserName){
        case 'webkit':
            console.log("Browser is set as webkit, Running tests on Webkit!");
            global.browser=await webkit.launch(browserLaunchOptions);
            break;
         case 'firefox':
                console.log("Browser is set as firefox, Running tests on firefox!");
                global.browser=await firefox.launch(browserLaunchOptions);
                break;    
         case 'chromium':
                console.log("Browser is set as chromium, Running tests on chromium!");
                global.browser=await chromium.launch(browserLaunchOptions);
                break;

        case '':
        case undefined:
        default:
            console.log("Browser is not set, Running on default browser : chromium!");
                    global.browser=await chromium.launch(browserLaunchOptions);
    }

});

Before({ name: "Set up browser context for desktop", tags: "not @mobile"}, async()=>{
 global.context = await global.browser.newContext({
    ignoreHTTPSErrors:true,
    args:["--start-maximized"],
    viewport: null
 });
 global.page=await global.context.newPage();
})


AfterAll(async()=>{
    await global.browser.close();
})