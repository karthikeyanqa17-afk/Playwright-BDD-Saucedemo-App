# SauceDemo Playwright Automation Framework

This project is a robust, scalable Web Automation Framework built using **Playwright** and **JavaScript**. It is designed using the **Page Object Model (POM)** design pattern and includes custom fixtures and **Allure Reporting** for comprehensive test execution insights.

## 🚀 Tech Stack

- **Automation Tool:** Playwright
- **Language:** JavaScript (ESM)
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Allure Reports & Playwright HTML
- **IDE:** Visual Studio Code

## 📁 Project Structure

Sauce Demo App Automation/
├── fixtures/
│ └── SauceDemoFixtures.js # Custom fixtures for Page Objects
├── POM/
│ ├── LoginPage.js # Login page locators and methods
│ ├── InventoryPage.js # Products page locators and methods
│ ├── CartPage.js # Cart page locators and methods
│ └── CheckoutPage.js # Checkout process locators and methods
├── tests/
│ └── SauceDemoTests.spec.js # Main test execution scripts
├── test-results/ # Video and trace files for failed tests
├── .env # Environment variables (URLs, Credentials)
├── package.json # Project dependencies and scripts
└── playwright.config.js # Playwright configuration settings

## 🛠️ Prerequisites

1. **Node.js** (v14 or higher) - Download from nodejs.org
2. **Visual Studio Code** - Download from code.visualstudio.com

## ⚙️ Installation & Setup

1. Clone the repository or open the project folder in VS Code.
2. Open the terminal and install the required dependencies:
   npm install

3. Install Playwright browsers:
   npx playwright install

4. Install Allure Reporting packages:
   npm install -D allure-playwright allure-commandline

## 🧪 Test Execution Commands

Run all tests in headed mode (Visible Browser) with slow motion:
npx playwright test --project=chromium --headed

Run tests in headless mode (Background execution):
npx playwright test

## 📊 View Allure Reports

After test execution, generate and open the Allure report using the following command:
npx allure generate ./allure-results --clean && npx allure open ./allure-report

## 🔐 Environment Variables (.env)

Create a `.env` file in the root directory and add the following details to run the tests securely:

BASE_URL=https://www.saucedemo.com/
STANDARD_USER=standard_user
LOCKED_OUT_USER=locked_out_user
PASSWORD=secret_sauce

---

_Developed by **Karthikeyan K** - Software Test Engineer (SDET)_
