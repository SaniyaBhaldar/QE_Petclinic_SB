import { Given, When, Then } from "cucumber";
import { browser, by, element, ExpectedConditions, until } from "protractor";
import { HomePageObjects } from "../../pageObjects/HomePageObjects";
import { NewOwnerPageObjects } from "../../pageObjects/Owners/NewOwnerPageObjects";
import { OwnerListPageObjects } from "../../pageObjects/Owners/OwnerListPageObjects";
import appTestData from "../../TestData/appTestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects();

//Scenario 1 : Verify user able to see new owner page after clicking ADD NEW sub-menu of Owners tab

When('User clicks on Owners tab', async function () {
    await homeObj.Owners.click();
});

When('Clicks on ADD NEW sub-menu', async function () {
    await homeObj.AddNewOwner.click();
});
Then('New Owner page should get displayed', async function () {
    await newOwnerObj.newOwnerTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("New Owner page get displayed")
    });
});

//Scenario 2 : Verify User able to see five text field labels on new owner registration page

Given('User is on new owner page', async function () {
    await newOwnerObj.newOwnerTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("new owner page");
    });
});

Then('Five text fields labels should be displayed as FirstName, LastName, Address, City, Telephone', async function () {

    let firstName = await newOwnerObj.firstName.getText();
    await console.log(" FirstName as : " + firstName);
    await expect("First Name").to.equal(firstName);

    let lastName = await newOwnerObj.lastName.getText();
    await console.log(" lastName as : " + lastName);
    await expect("Last Name").to.equal(lastName);

    let address = await newOwnerObj.address.getText();
    await console.log(" address as : " + address);
    await expect("Address").to.equal(address);

    let city = await newOwnerObj.city.getText();
    await console.log(" city as : " + city);
    await expect("City").to.equal(city);

    let telephone = await newOwnerObj.telephone.getText();
    await console.log(" telephone as : " + telephone);
    await expect("Telephone").to.equal(telephone);

});

//Scenario 3 : Verify user is able to add New Owner
//to do


Given('User is on New Owner page', async function () {
    await newOwnerObj.newOwnerTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("new owner page");
    });
});


When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    let firstName =appTestData.appTestData.newOwnerData.FirstName
    await newOwnerObj.firstNameTextField.sendKeys(firstName);

    let lastName = appTestData.appTestData.newOwnerData.LastName
    await newOwnerObj.lastNameTextField.sendKeys(lastName);

    let address = appTestData.appTestData.newOwnerData.Address
    await newOwnerObj.addressTextField.sendKeys(address);

    let city = appTestData.appTestData.newOwnerData.City
    await newOwnerObj.cityTextField.sendKeys(city);

    let telephone =appTestData.appTestData.newOwnerData.Telephone
    await newOwnerObj.telephoneTextField.sendKeys(telephone);

});


When('User clicks on Add Owner button on New Owner page', async function () {
    await newOwnerObj.addOwnerButton.click();
});


Then('User should be navigate on Owners page and added owner should be displayed at last', async function () {
    let pagename = await ownerListObj.ownersListPageName.getText();
    await console.log("page name is : " + pagename);
    await expect("Owners").to.equal(pagename);

    let ec = ExpectedConditions;
    await browser.refresh();
    await browser.wait(ec.visibilityOf(ownerListObj.responseList), 20000, 'Taking too long to load');
  

    let lastRowEntry = await ownerListObj.responseList.all(by.tagName("tr")).last();
    console.log("lastRowEntry"+lastRowEntry);

    browser.executeScript('window.scrollBy(0,1000)');
    let newOwnerDetails = await lastRowEntry.getText();
   
    await console.log("newOwnerDetails : " + newOwnerDetails);
    await expect("Raj Mane 15 street NewYork 9870688977").to.equal(newOwnerDetails);

   /* let count = await ownerListObj.responseList.all(by.tagName("tr")).count();
    console.log(count);

    for (let i = 1; i <= count; i++) {
        let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
        console.log(owners);

        //to do scrolling logic 

        if (owners == "Sarah John") {
            await console.log("Sarah John is added successfully in the list.")
            break;
        }
        else {
            console.log("Sarah John is not added in the list.")
        }

    }
*/

});