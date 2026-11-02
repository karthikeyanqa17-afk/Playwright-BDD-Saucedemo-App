// Generated from: Features\login.feature
import { test } from "playwright-bdd";

test.describe('Sauce Demo Login Functionality', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I enter username "standard_user" and password "secret_sauce"', null, { page }); 
    await And('I click the login button', null, { page }); 
    await Then('I should see the products page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"secret_sauce\"","children":[{"start":47,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]}]},
]; // bdd-data-end