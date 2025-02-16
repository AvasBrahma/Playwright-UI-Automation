module.exports={
    default: `--require resources/cucumberConfig.js
             --format-options '{"theme":{"feature keyword": ["magenta","bold"],"scenario keyword":["magenta","bold"],"step keyword":["bold"]}}'
             --format @cucumber/pretty-formatter
             --format html:target/cucumber-report.html
             --require stepDefinitions/*.js
             require features/*.feature
             --tags "@fe"`,

    local:`--require resources/cucumberConfig.js`,

    stepDefinitionPath: `stepDefinitions/*.js`,

    featureFilePath: `features/*.feature`



};