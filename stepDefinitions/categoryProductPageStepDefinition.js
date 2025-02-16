
const { Given, Then, When, Before } =require('@cucumber/cucumber')
const { expect } = require ('@playwright/test');
const { CategoryProductHomePage } =require('../pageObject/categoryProductHomePage');


When('Apply the Brand Filter as {string}', async function(filterName){
    let categoryProductHomePage=new CategoryProductHomePage(page);
    await categoryProductHomePage.applyBrandFilter(filterName);
 });