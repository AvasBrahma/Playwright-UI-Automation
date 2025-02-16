const { FlipkartHomePageObject } = require('../pageObject/flipkartHomePageObject');
const { CategoryProductHomePage } = require('../pageObject/categoryProductHomePage');
class PageFactory{

    getPageObject(pageName){
        switch(pageName.toLowerCase()){
            case 'home page':
                return new FlipkartHomePageObject();
            case 'Category Home Page':
                return new CategoryProductHomePage();
            default:
                throw new Error(`Unkown Page Name, page not found : ${pageName}`);
        }
    }
}

module.exports=PageFactory;