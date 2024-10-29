
const { Given, Then, When, Before } =require('@cucumber/cucumber')

const { expect } = require ('@playwright/test');
const { FlipkartPageObject } =require('../pageObject/flipkartPageObject');


Before({name: "Parsing scenario tags to drive execution for mobile or desktop"}, async({pickle})=>{
    tags=await pickle.tags.map(i=>i.name);
})


Given('Navigate to the Website', async function(){
       let flipkartPageObject=new FlipkartPageObject(page);
       await flipkartPageObject.navigate();
})