const AWS=require('aws-sdk');

class AWSConfig{

    static async setAWSConfig(){
        AWS.config.update({region: ''}); // set the correct region name before calling getSecretValue
    }
    
    static async getSecretValue(secretName){
        const secretsManager=new AWS.SecretsManager();
        try {
            const data=await secretsManager.getSecretValue({
                SecretId: secretName,
            }).promise();
            return data.SecretString?JSON.parse(data.SecretString):null;
        } catch (error) {
            console.error('Error retrieving Secret Value', error.message);
            throw error;
        }
    }
}

module.exports=AWSConfig;