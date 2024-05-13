# WebdriverIO Tests for Telnyx.com with Allure Reporting

This repository contains automated tests for a web telnyx.com using WebdriverIO framework and integrates Allure for enhanced reporting capabilities. The tests are designed to be run both locally and within CI/CD pipelines, demonstrating how to automate browser testing effectively.

## Getting Started

Follow these instructions to set up the project locally and within the pipeline on Github Actions. These steps will get you a copy of the project up and running on your local machine for development and testing purposes and also running the flow on a pipeline on github actions with allure test report availabe on Github Pages.

### Prerequisites

You need Node.js and npm installed on your computer. If you do not have these installed, follow the instructions from the [Node.js official website](https://nodejs.org/).

### Check Node.js installation
```
node --version
```

### Check npm installation
```
npm --version
```

### Installation

Clone the repository to your local machine:
```
git clone https://github.com/kiteamismorethansport/wd.io_telnyx_tests.git
```

Install the necessary packages:
```
npm install
```

### Running Tests

To run tests with default configuration, use the following command:
```
npm run wdio
```
This command will execute tests using the default WebdriverIO settings.

```
npm run wdio:chrome
```
This command will execute tests using Chrome browser

```
npm run wdio:edge
```
This command will execute tests using Edge browser

```
npm run wdio:firefox
```
This command will execute tests using Firefox browser

```
npm run wdio:file
```
This command will execute tests of a single file with specific name

### Generating Allure Reports

After running the tests, generate the Allure report with:
```
npm run report
```
This script triggers the Allure CLI to convert the test results into a human-readable report. You can view these reports by opening allure-report/index.html in any web browser.

### To run tests within a pipeline on Github Actions and to see allure report on Github Pages, you just need to create new repository on your Github account , and to push this project to your repository.  

Built With
Node.js - The JavaScript runtime
WebdriverIO - Selenium-based testing framework
Allure - Reporting tool
Authors - kiteamismorethansport



