const { context } = require("@cucumber/cucumber");


const browserSetup={
    browserName:process.env.Browser || 'chromium',
    testOnDesktop:true,
    testOnMobile: true
};


const browserLaunchOptions={
    headless: Boolean(process.env.ENABLE_HEADLESS_CI)|| false,
    baseURL:"",
    slowmo: 1000,
    timeout:30000,
};

const contextOptions={
     viewport: {width: 1600, height:1200},
     isMobile: false,
     userAgent: '',
     devicePixelRatio: 1,
     hasTouch: false
}

module.exports={ browserSetup, browserLaunchOptions};

