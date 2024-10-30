
const { Given, Then, When, Before } =require('@cucumber/cucumber')

const { expect } = require ('@playwright/test');
const { FlipkartPageObject } =require('../pageObject/flipkartPageObject');


Given('Navigate to the Website', async function(){
       let flipkartPageObject=new FlipkartPageObject(page);
       await flipkartPageObject.navigate();
})