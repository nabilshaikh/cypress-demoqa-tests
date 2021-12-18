# Cypress-DemoQA-Tests

This Cypress based sample tests project is implemented with the help of TypeScript and uses page-object model as the design pattern with BDD approach.

**Folder Structure:**

```

├── cypress
│   └── specs (feature files)
|   └── step-definitions (tests code)
│   └── ui-identifiers (page objects)
│   └── reports (load reports in HTML & JSON formats)
│   └── screenshots (capture screenshot on failure)
└── cypress.json (cypress global configuration)
└── testReport.html (mochawesome based HTML report)

```

**Salient Features:**

- Based on POM design pattern.
- Has the capability to run on various viewports such as desktop, tablet and mobile.
- Based on Cucumber / Gherkin standard.
- Cross-browser platform.
- Fully automated and provide both console and HTML report.
- Ability to take screenshot on failure.

**Installation**:

- Clone the project
- Open terminal and run `npm install`

**Running tests**:

- Open terminal, run `npm run cy:open` to run tests in headed mode or run `npm run cy:run` to run in headless mode.