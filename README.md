# 🚀 End-to-End Test Automation Framework

An advanced test automation framework built using **Playwright**, **JavaScript**, and **Cucumber.js (BDD)**. It integrates API testing, database validation, CSV parsing, secure credentials, reporting, and CI/CD with Jenkins.

---

## 📌 Features

- 🔍 **End-to-End UI Testing** using [Playwright](https://playwright.dev/)
- 🧪 **Behavior-Driven Development (BDD)** with [Cucumber.js](https://github.com/cucumber/cucumber-js)
- 🔗 **API Testing** via [Axios](https://axios-http.com/)
- 🗄️ **Database Integration** with [mssql](https://www.npmjs.com/package/mssql)
- 📁 **CSV Data Handling** with [csv-parser](https://www.npmjs.com/package/csv-parser)
- 🔐 **Secrets Management** using [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
- 📊 **Cucumber HTML Reports** for test result visualization
- 🔄 **CI/CD Integration** with [Jenkins](https://www.jenkins.io/)

---

## 📁 Folder Structure

project-root/
├── 🧪 features/           # 🧪 BDD scenarios (Feature files)
├── 🧾 step-definitions/   # 🧾 Step implementations
├── 🧭 pages/              # 🧭 Page Object Models
├── 🧰 utils/              # 🧰 Utilities (DB, API, CSV, logger, etc.)
├── 📊 target/             # 📊 Cucumber HTML reports
├── ⚙️ config/             # ⚙️ Configuration files (env, secrets)
├── 🗃️ test-data/          # 🗃️ External test data (CSV/JSON)
├── 🚀 jenkins/            # 🚀 Jenkins pipeline scripts
├── 🔐 .env                # 🔐 Environment variables
├── 🥒 cucumber.js         # 🥒 Cucumber configuration
└── 📦 package.json        # 📦 Project dependencies and scripts


## ⚙️ Setup Instructions

```bash
1. Clone the Repository

git clone https://github.com/AvasBrahma/Playwright-UI-Automation.git

2. Install Dependencies
npm install

3. Running Tests
    Run All Test: npx cucumber-js
    Run Tests by Tag: npx cucumber-js --tags "@regression"
4. Test Reports
    After execution, HTML reports are generated under the target/ directory.
    open target/cucumber-report.html
