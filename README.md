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

- Open terminal, run `npm run cy:open` to run tests in headed mode or run `npm run cy:run` to run in headless mode

Once the execution is complete, this is how the test report would look like,

<ins>Console</ins>:

<img width="729" alt="console-report" src="https://user-images.githubusercontent.com/58862186/146646710-c0396c02-316f-4296-b478-239f43687633.png">

<ins>HTML</ins>: 

<img width="1439" alt="html-report" src="https://user-images.githubusercontent.com/58862186/146646772-11b7c386-7d4c-4052-b905-7d8aa72bdcd0.png">
<br></br>

# (A) Testing strategy

The goal of test automation is to increase the effectiveness and efficiency of testing. Good automation makes testing faster, more systematic, and reduces human error. This includes: to reduce the number of test cases that testers have to perform manually as well as those that are challenging to perform manually, therefore saving time and effort.

The ideal test automation strategy is to follow the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) mindset. The test pyramid is a way of thinking about how different kinds of automated tests should be used to create a balanced portfolio. The whole point is to offer immediate feedback to ensure that code changes do not disrupt existing features. This would essentially help both developers and QAs to create high-quality software. It reduces the time required for developers to identify if a change they introduced breaks the code.

This test automation pyramid mainly operates at three levels: Unit, Integration & UI.

<kbd><img src="https://user-images.githubusercontent.com/58862186/146646982-68866fae-dca3-4b10-a222-ed8ad6e1da44.png" alt="Test Pyramid" border="1" width=500></kbd>

1. <ins>**Unit tests**</ins> form the base of the test pyramid. They should be frequent, and they should run fast.

2. <ins>**Integration tests**</ins> are the middle tier of the pyramid. These tests focus on interactions of your code with the outside world, such as databases and external services or microservices.
3.	<ins>**UI tests**</ins> top the test pyramid. They’re written from the perspective of a user and should test that your entire application is functioning from front-end to back-end.
<br></br>

**Why to use test pyramid?**

- Pyramid help QAs to define right priorities. If test scripts are written with a greater focus on the UI, then chances are that core business logic and back-end functionality is not sufficiently verified periodically. Hence, this affects product quality and leads to more work for the team.
- As TAT (turnaround time) of UI tests is high, it leads to lower test coverage overall. By adopting the pyramid, such situations can be completely avoided, and QAs can focus on writing quality tests keeping in mind all the 3 layers defined.
- Frequent collaboration between 3 Amigos (i.e. Developer, Tester & Product Owner)
- Since the pyramid is built to run the complex tests at the beginning, testers can manage time better, get better results and essentially make life easier for everyone involved. Therefore, it emphasize speed and efficacy.