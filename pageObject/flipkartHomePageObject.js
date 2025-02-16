const {expect}= require("@playwright/test");
const { logger }=require('../utils/pwLogger');
const { PWHelper }=require('../utils/pwHelper');
class FlipkartHomePageObject{

  constructor(page){
       this.page=page;
       this.homePageCategorySectionXpathTemp="//div[@aria-label='{categoryName}']";
       this.categorySubMenuTemp="//a[@class='_1BJVlg' and contains(text(), '{subMenuName}')]";
  }


  async navigateHomePageCategory(categoryName){
      const finalCategoryXpath=this.homePageCategorySectionXpathTemp.replace("{categoryName}", categoryName);
      await this.page.waitForSelector(finalCategoryXpath);
      await this.page.click(finalCategoryXpath);
      await PWHelper.takeScreenshot(categoryName);
      logger.info(`PASS: click to home page category ${categoryName}`);

  }

  async clickCategorySubMenu(categorySubMenu){
    const categorySubMenuXpath=this.categorySubMenuTemp.replace("{subMenuName}", categorySubMenu);
    await this.page.waitForSelector(categorySubMenuXpath);
    await this.page.click(categorySubMenuXpath);
    await PWHelper.takeScreenshot(categorySubMenu);
    logger.info(`PASS: click Category Sub Menu ${categorySubMenu}`);
  }

}

module.exports={FlipkartHomePageObject};