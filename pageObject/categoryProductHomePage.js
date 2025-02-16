const {expect}= require("@playwright/test");
const { logger }=require('../utils/pwLogger');
const { PWHelper }=require('../utils/pwHelper');
class CategoryProductHomePage{

  constructor(page){
       this.page=page;
       this.brandFilterCheckBoxTemp="//div[@class='_6i1qKy' and contains(text(), '{brandName}')]/preceding-sibling::input[@type='checkbox']";
  }


async applyBrandFilter(filterName){
    await this.page.pause();
    const filterCheckboxXPath=this.brandFilterCheckBoxTemp.replace('{brandName}',filterName);
    await this.page.waitForSelector(filterCheckboxXPath);
    await this.page.click(filterCheckboxXPath);
    await PWHelper.takeScreenshot(filterName+'_checkBox_click');
    logger.info(`PASS: Successfully Apply the Brand Filter as ${filterName}`);
}



}


module.exports={CategoryProductHomePage};
