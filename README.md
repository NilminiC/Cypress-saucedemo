# Cypress SauceDemo E2E Test

## Project Overview
This project contains a Cypress E2E test for [SauceDemo](https://www.saucedemo.com) that:

- Logs in using externalized credentials
- Checks the first inventory item
- Adds it to the cart
- Verifies the cart badge shows "1"
- Exits after verification
- Generates a "Mochawesome report" for headless runs

## Setup Instructions
1. Clone the repository:
-within bash
git clone <your-repo-url>
cd cypress-saucedemo

2. Install dependencies:
-within bash
npm install
npm install --save-dev mochawesome

3. Add ".env" file in the project root with the base URL:
BASE_URL=https://www.saucedemo.com

4. Add "cypress/fixtures/credentials.json" with your login credentials.
   Important: This file is ignored by git and should never be committed.

{
  "username": "standard_user",
  "password": "secret_sauce"
}

## Running Tests
 1. Open Cypress GUI
-within bash
npm run cypress:open

2. Headless Run with Report
-within bash
npm run cypress:run

- Runs all tests in "headless mode"
- Generates a Mochawesome report in "cypress/reports/":
  - mochawesome.html → HTML report
  - mochawesome.json → JSON report


## Notes
- Tests use Page Object Model (POM) for maintainability.
- Credentials are externalized in "credentials.json" (never hardcoded in tests).
- Test exits after verifying cart badge.
- Avoid committing ".env" or "credentials.json".

## Recommended Git Ignore
Make sure ".gitignore" contains:
node_modules/
cypress/fixtures/credentials.json
.vscode/

This Ensures sensitive information and node modules are not committed.
