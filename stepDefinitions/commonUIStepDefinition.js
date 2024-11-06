
const { Given, Then, When, Before } =require('@cucumber/cucumber')

const { expect } = require ('@playwright/test');
const { FlipkartHomePageObject } =require('../pageObject/flipkartHomePageObject');
const { CommonActions } = require('../pageObject/commonActions');
const PageFactory=require('../utils/PageFactory');


Given('Navigate to the Website', async function(){
  let commonActions=new CommonActions(page);
  await commonActions.goto();
})

When('Click the button {string} in the {string} page', async function(buttonName, pageName){
  
})