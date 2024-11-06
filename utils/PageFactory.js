const { FlipkartHomePageObject } = require('../pageObject/flipkartHomePageObject');
class PageFactory{

    getPageObject(pageName){
        switch(pageName.toLowerCase()){
            case 'home page':
                return new FlipkartHomePageObject();
            default:
                throw new Error(`Unkown Page Name, page not found : ${pageName}`);
        }
    }
}

module.exports=PageFactory;