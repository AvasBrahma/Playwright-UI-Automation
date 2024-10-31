const path=require('path');
class PWHelper{

  static page;
  static setPage(page){
    PWHelper.page=page;
  }
  
  //method for taking screenshot
  static async takeScreenshot(fileName){
    const screenshotPath=String(path.join(global.testContext.baseDir, fileName+".png"));
    await PWHelper.page.screenshot({path: screenshotPath, fullPage: true});
  }


}

module.exports={PWHelper};