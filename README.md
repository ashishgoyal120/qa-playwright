## Playwright Automation Framework

## Getting Started

### Prerequisites

Playwright requires Node.js 16+ [System Requirements ](https://playwright.dev/docs/intro#system-requirements)

### Installation

Clone repository

```bash
https://github.com/

```

Navigate to project folder and install npm packages using:

```bash
npm install
```

Use **.env.template** file to create a **.env** file and update the values.
**.env** file is ignored in gitignore. Do not change it as we do not want to push the **.env** file to git.

By Default 'staging' environment will be used for test execution.To provide the ENVIRONMENT use .env file.
Or use the below command to run on different environment.

bash

```bash

ENVIRONMENT=staging npx playwright test examples

```

powershell

```powershell

$env:ENVIRONMENT="staging"
npx playwright test examples

```

If ENVIRONMENT provided is other than 'staging' or 'development' then test execution process will exit. Check environmentConfig.ts file for more details.

### Commandline - Example

Runs the tests in a specific file.

```

npx playwright test examples

```

### Highlevel Overview of the Framework Folder Structure

**_config_** - Contains the playwright configuration files for different environments.  
**_components_** - Contains all the reusable components. Example: Header, Footer, Navigation etc.  
**_pages_** - Contains subfolder for V2,V3,V4. Each subfolder contains page objects for each page.  
**_fixtures_** - Contains the playwright fixtures.[Fixtures - Playwright Documentation](https://playwright.dev/docs/test-fixtures)  
**_tests_** - Contains the tests. Subfolder for V2,V3,V4.  
**_test-data_** - Contains the test data which may be used in pages or tests.  
**_utils_** - Contains the utility functions.  
**_env.template_** - Template file for .env file.  
**_.eslintrc.json_** - Contains the eslint configuration.  
**_.prettierrc.json_** - Contains the prettier configuration.  
**_playwright.config.js_** - Contains the playwright configuration.  
**_.gitignore_** - Contains the files which are ignored by git.  
**_.prettierignore_** - Contains the files which are ignored by prettier.  
**_package.json_** - Contains the npm packages and scripts.

### Commands - Example

Runs the end-to-end tests.

```

npx playwright test

```

Starts the interactive UI mode.

```

npx playwright test --ui

```

Runs the tests only on Desktop Chrome.

```

npx playwright test --project=chromium

```

Runs the tests in a specific file.

```

npx playwright test example

```

Runs the tests in debug mode.

```

npx playwright test --debug

```

Auto generate tests with Codegen.

```

npx playwright codegen

```

To run the test only in v2 test folder. Just for demo purpose.

```

npx playwright test --project=chromium-v2

```

To run the using specific config file.

```

npx playwright test --config=config/playwright.config.ts

```

## Artillery Load Testing

### Background

The [idea](https://dev.to/artilleryio/load-testing-with-playwright-m0a) for setting up Artillery with Playwright tests. 
The [github page](https://github.com/artilleryio/artillery/tree/main/packages/artillery-engine-playwright) outlining the specifics of artillery-engine-playwright.

### Getting Started

More information on Artillery, phases, and other setup can be found in the [Documentation](https://www.artillery.io/docs/reference/engines/playwright)

Install Artillery and the playwright engine via npm:

```bash

npm install -g artillery artillery-engine-playwright

```

Navigate to the root folder and run:

```bash

artillery run artilleryLoadTest.yml

```

This runds the default setup, where the **processor** variable is the file name that contains the test you want to run.

```yml

processor: "tests/examples/artillery-example.spec.ts"

```

The following is an example of including the test function of the playwright spec file, where you must specify the **engine** as playwright and the **testFunction** is the exported function from the file.

```yml

scenarios:
  - engine: playwright
    testFunction: "artilleryTest"

```

Some things to note when writing the test file to be used with Artillery

- You must use a function instead of test
```javascript 

async function artilleryTestLogin(page) {

```
instead of:
```typescript

test('Artillery Example 2', async ({ page }) => {

```
- You can't use **expect** in the spec file, you must verify results in a seperate page.