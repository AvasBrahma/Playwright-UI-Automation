
const { Given, Then, When, Before } =require('@cucumber/cucumber')
const { expect } = require ('@playwright/test');
const { CommonActions } = require('../pageObject/commonActions');
const PageFactory=require('../utils/PageFactory');


Given('Navigate to the Website', async function(){
  let commonActions=new CommonActions(page);
  await commonActions.goto();
})

When('Click the button {string} in the {string} page', async function(buttonName, pageName){
   const pageFactory=new PageFactory();
   const specificPage=pageFactory.getPageObject(pageName);
   let commonActions=new CommonActions(page);
   await commonActions.clickButton(specificPage, buttonName);
});

When('Enter the input text for {string} as {string} in the {string} Page', async function(inputFieldName, inputFieldValue, pageName){
  const pageFactory=new PageFactory();
  const specificPage=pageFactory.getPageObject(pageName);
  let commonActions=new CommonActions(page);
  await commonActions.enterText(specificPage, inputFieldValue, inputFieldName);
})