const {expect}= require("@playwright/test");
const { logger }=require('../utils/pwLogger');
class FlipkartHomePageObject{

  constructor(page){
       this.page=page;
       this.homePageCategorySectionXpathTemp="//div[@aria-label='{categoryName}']";
  }


  async navigateHomePageCategory(categoryName){
      const finalCategoryXpath=this.homePageCategorySectionXpathTemp.replace("{categoryName}", categoryName);
      await this.page.waitForSelector(finalCategoryXpath);
      await this.page.click(finalCategoryXpath);
      logger.info(`PASS: click to home page category ${categoryName}`);

  }

}

module.exports={FlipkartHomePageObject};