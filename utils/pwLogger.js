const winston=require('winston');
const path=require('path');

const logLevels={
    error: 0,
    info: 1
};

const logColors={
    error: 'red',
    info: 'green'
}

function createTestLogger(logDir){
    return path.join(logDir, 'testlog.log');
}

const logger=winston.createLogger({
    levels: logLevels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({timestamp, level, message})=>{
            return `${timestamp} [${level}]: ${message}`;
        })
    ),

    transports:[new winston.transports.Console()]
});

winston.addColors(logColors);

module.exports={logger, createTestLogger};