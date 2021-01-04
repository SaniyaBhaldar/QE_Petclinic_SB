import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { globalPageObjects } from "../../pageObjects/globalPageObjects";
import { HomePageObjects } from "../../pageObjects/homePageObjects";
import { NewOwnerPageObjects } from "../../pageObjects/owners/newOwnerPageObjects";
import { OwnerListPageObjects } from "../../pageObjects/owners/ownerListPageObjects";
import appTestData from "../../testData/appTestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects();
let globalObj = new globalPageObjects();
let ownerListObj=new OwnerListPageObjects();

//Scenario 1 : Verify user able to see new owner page after clicking ADD NEW sub-menu of Owners tab

When('User clicks on Owners tab', async function () {
    await homeObj.clickOwnersMenu();
});

When('Clicks on ADD NEW sub-menu', async function () {
    await homeObj.clickAddNewOwner();
});
Then('New Owner page should get displayed', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});

//Scenario 2 : Verify User able to see five text field labels on new owner registration page

Given('User is on new owner page', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});

Then('Five text fields labels should be displayed as FirstName, LastName, Address, City, Telephone', async function () {

    await expect("First Name").to.equal(await newOwnerObj.getFirstNameText());
    await expect("Last Name").to.equal(await newOwnerObj.getLastNameText());
    await expect("Address").to.equal(await newOwnerObj.getAddressText());
    await expect("City").to.equal(await newOwnerObj.getCityText());
    await expect("Telephone").to.equal(await newOwnerObj.getTelephoneText());
});

//Scenario 3 : Verify user is able to add New Owner

Given('User is on New Owner page', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});


When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    await newOwnerObj.sendKeyFirstName();
    await newOwnerObj.sendKeyLastName();
    await newOwnerObj.sendKeyAddress();
    await newOwnerObj.sendKeyCity();
    await newOwnerObj.sendKeyTelephone();
});


When('User clicks on Add Owner button on New Owner page', async function () {
    await newOwnerObj.clickAddOwnerButton();
});


Then('User should be navigate on Owners page and added owner should be displayed at last', async function () {
    ownerListObj.waitBrowser();
    await expect("Owners").to.equal(await globalObj.getPageTitleText());
    globalObj.getRefresh();
    globalObj.waitTillVisible();
    await expect(appTestData.appTestData.newOwnerData.expectedData).to.equal(await globalObj.getLastEntryNewListDetails());
    
});