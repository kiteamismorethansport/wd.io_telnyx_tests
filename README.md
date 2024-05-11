# WebdriverIO Tests for Telnyx.com with Allure Reporting

This repository contains automated tests for a web telnyx.com using WebdriverIO and integrates Allure for enhanced reporting capabilities. The tests are designed to be run both locally and within CI/CD pipelines, demonstrating how to automate browser testing effectively.

## Getting Started

Follow these instructions to set up the project locally. These steps will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js and npm installed on your computer. If you do not have these installed, follow the instructions from the [Node.js official website](https://nodejs.org/).

```bash
# Check Node.js installation
node --version

# Check npm installation
npm --version
Installation
Clone the repository to your local machine:

bash
git clone https://github.com/yourusername/yourprojectname.git
cd yourprojectname
Install the necessary packages:

bash
npm install
Configuration
Ensure that the WebdriverIO configuration files are set up correctly. These can be found in wdio.conf.js and any other browser-specific config files like wdio.chrome.conf.js.

Running Tests
To run tests, use the following command:

bash
npm run wdio
This command will execute tests using the default WebdriverIO settings.

Generating Allure Reports
After running the tests, generate the Allure report with:

bash
npm run report
This script triggers the Allure CLI to convert the test results into a human-readable report. You can view these reports by opening allure-report/index.html in any web browser.

Deployment
Include notes about deploying this on a live system, if applicable. Often, this will involve integrating with a CI/CD pipeline, where tests are run automatically:

Configure the pipeline to build the project.
Run tests and generate reports using the commands provided above.
Optionally push results to a monitoring or report aggregation service.
Built With
Node.js - The JavaScript runtime
WebdriverIO - Selenium-based testing framework
Allure - Reporting tool
Authors - kiteamismorethansport



