
const { Given, Then, When, Before } =require('@cucumber/cucumber')
const { expect } = require ('@playwright/test');
const { FlipkartHomePageObject } =require('../pageObject/flipkartHomePageObject');

When('Navigate To Home Page Category {string}', async function(categoryName){
    let flipkartHomePageCategory=new FlipkartHomePageObject(page);
    await flipkartHomePageCategory.navigateHomePageCategory(categoryName);
 });


 When('Click to the Category Sub Menu {string}', async function(categorySubMenuName){
    let flipkartHomePageCategory=new FlipkartHomePageObject(page);
    await flipkartHomePageCategory.clickCategorySubMenu(categorySubMenuName);
 });