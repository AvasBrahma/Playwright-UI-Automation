require("dotenv").config();

class CommonActions{

   constructor(page){
    this.page=page;
   }

   async goto(){
    await this.page.goto(process.env.MainURL, { waitUntil: 'networkidle'});
   }

   async clickButton(PageObject, buttonName){
    try {
        const selector=PageObject[buttonName];
        if(!selector) throw new Error(`No Selector found for button : ${buttonName}`);
        await this.page.click(selector);
        await this.waitForLoadState('load');
    } catch (error) {
        
    }
}

   async enterText(PageObject, inputFieldName, inputFieldValue){
    try {
        const selector=PageObject[inputFieldName];
        if(!selector) throw new Error(`Fail: No Selector found for input text field: ${inputFieldName}`);
        await this.page.fill(selector, inputFieldValue);
    } catch (error) {
        throw error;
    }
   }

   async selectDropDown(PageObject, dropDownName, dropDownValue){
     const selector=PageObject[dropDownName];
     if(!selector) throw new Error(`Fail: No Selector Found for DropDown: ${dropDownName}`);
     const options=await this.page.$$(selector);
     let dropDownValueFound=false;
     for(const option of options){
        let actualValue=await option.textContent();
        if(actualValue==dropDownValue){
            await option.click();
            break;
        }
     }
     if(!dropDownValueFound){
        throw new Error(`Fail: ${dropDownValue} not found from the dropdown list`);
     }

   }



}

module.exports= { CommonActions };