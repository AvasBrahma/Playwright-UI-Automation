const fs=require('fs');
const csv=require('csv-parser');

class CSVDataHelper{
    
    static dataMap=new Map();
    static currentTestCaseId=null;


    static async readCSV(filePath){
        return new Promise((resolve, reject)=>{
            fs.createReadStream(filePath).pipe(csv()).on('data', (row)=>{
                const testCaseId=row[Object.keys(row)[0]];
                const header=row['Header']?.trim();
                const value=row['Data']?.trim();

                if(!CSVDataHelper.dataMap.has(testCaseId)){
                    CSVDataHelper.dataMap.set(testCaseId,{});
                }
                if(header){
                    const values=value.includes('|')?value.split('|').map(val=>
                        val.trim()):[value];
                    CSVDataHelper.dataMap.get(testCaseId)[header]=values;
                }
            })
        })
    }

    static async setCurrentTestCaseId(testCaseId){
       CSVDataHelper.currentTestCaseId=testCaseId;
    }

    static async getData(header){
        if(CSVDataHelper.dataMap.has(CSVDataHelper.currentTestCaseId)){
            const testData=CSVDataHelper.dataMap.get(CSVDataHelper.currentTestCaseId);
            if(!(header in testData)){
                throw new Error(`Fail: Header ${header} not found for test case id ${CSVDataHelper.currentTestCaseId}`);
            }
            return testData[header];
        }else{
            throw new Error(`Fail: Test Case ID ${CSVDataHelper.currentTestCaseId} not found in the test data csv file.`);
        }
    }




}