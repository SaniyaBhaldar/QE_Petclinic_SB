import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../../pageObjects/HomePageObjects";
import { NewOwnerPageObjects } from "../../pageObjects/Owners/NewOwnerPageObjects";
import { OwnerListPageObjects } from "../../pageObjects/Owners/OwnerListPageObjects";
import { ViewOwnerPageObjects } from "../../pageObjects/Owners/viewOwnerPageObjects";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects();
let viewOwnerObj= new ViewOwnerPageObjects();
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

