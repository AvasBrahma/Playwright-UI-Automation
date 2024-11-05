
const { Given, Then, When, Before } =require('@cucumber/cucumber')

const { expect } = require ('@playwright/test');
const { FlipkartPageObject } =require('../pageObject/flipkartPageObject');
const { CommonActions } = require('../pageObject/commonActions');


Given('Navigate to the Website', async function(){
  let commonActions=new CommonActions(page);
  await commonActions.goto();
})