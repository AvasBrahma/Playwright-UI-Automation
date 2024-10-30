const {expect}=require("@playwright/test");
const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const fs=require('fs');
const path=require('path');

class BeforeActions{

    static timeStampPath;

    static async runBeforeAllTest(){
        const timeStamp=new Date().toISOString().replace(/[-:.]/g,'');
        const projectDir=path.resolve(process.cwd(), 'target');
        BeforeActions.timeStampPath=path.join(projectDir, `${timeStamp}`);
    }

    static async runBeforeConfig(scenario){
     await this.setUpReportDir(scenario);
    }

    static async setUpReportDir(scenario){
       const scenarioName=scenario.pickle.name;
       let tags=String(scenario.pickle.tags.map(tag=>tag.name));
       tags=tags.substring(1);
       const baseDir=path.join(BeforeActions.timeStampPath, tags);
       console.log("Setting up execution report folder in ", baseDir);
       if(!fs.existsSync(baseDir)){
        fs.mkdirSync(baseDir, {recursive: true});
       }
    }
}

module.exports=BeforeActions;