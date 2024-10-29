const {expect}= require("@playwright/test");

class FlipkartPageObject{

  constructor(page){
       this.page=page;
  }

  async navigate(){
      await this.page.goto('https://www.flipkart.com/');
  }


}

module.exports={FlipkartPageObject};