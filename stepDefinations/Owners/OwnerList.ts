import { Given, When, Then } from "cucumber";
import { globalPageObjects } from "../../pageObjects/globalPageObjects";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let globalObj=new globalPageObjects();

//Scenario 1 : Verify title of the page as 'Owners'

Given('User is on Owners List page', async function () {
        await expect(true).to.equal(globalObj.displayPageTitle());
});

Then('Owners page title should be displayed', async function () {
    await expect("Owners").to.equal(globalObj.getPageTitleText());
});

