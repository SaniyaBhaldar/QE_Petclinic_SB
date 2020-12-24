import { Given, When, Then } from "cucumber";
import { OwnerListPageObjects } from "../../pageObjects/Owners/OwnerListPageObjects";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let ownerListObj=new OwnerListPageObjects();

//Scenario 1 : Verify title of the page as 'Owners'

Given('User is on Owners List page', async function () {
    await ownerListObj.ownersListPageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("Owners List Page Displayed");
    });
});

Then('Owners page title should be displayed', async function () {
    let pageTitle = await ownerListObj.ownersListPageName.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Owners").to.equal(pageTitle);
});

