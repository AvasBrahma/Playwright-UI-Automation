
const { Given, Then, When, Before } =require('@cucumber/cucumber')
const { expect } = require ('@playwright/test');
const { FlipkartHomePageObject } =require('../pageObject/flipkartHomePageObject');

When('Navigate To Home Page Category {string}', async function(categoryName){
    let flipkartHomePageCategory=new FlipkartHomePageObject(page);
    await flipkartHomePageCategory.navigateHomePageCategory(categoryName);
 });